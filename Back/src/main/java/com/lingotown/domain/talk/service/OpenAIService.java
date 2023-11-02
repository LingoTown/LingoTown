package com.lingotown.domain.talk.service;

import com.google.gson.Gson;
import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.domain.talk.dto.request.*;
import com.lingotown.domain.talk.dto.response.CreateOpenAIResDto;
import com.lingotown.domain.talk.dto.response.OpenAIResDto;
import com.lingotown.domain.talk.entity.Talk;
import com.lingotown.domain.talk.entity.TalkDetail;
import com.lingotown.domain.talk.repository.TalkDetailRepository;
import com.lingotown.domain.talk.repository.TalkRepository;
import com.lingotown.global.aspect.ExecuteTime.TrackExecutionTime;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import com.lingotown.global.service.CacheService;
import com.lingotown.global.service.S3Service;
import com.lingotown.global.tts.TTSService;
import com.lingotown.global.util.WebClientUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class OpenAIService {

    private final WebClientUtil webClientUtil;
    private final TalkRepository talkRepository;
    private final MemberRepository memberRepository;
    private final TalkDetailRepository talkDetailRepository;
    private final CacheService cacheService;
    private final TalkService talkService;
    private final S3Service s3Service;
    private final TTSService ttsService;


    @Value("${OPEN_AI.URL}")
    private String ENDPOINT_URL;

    @Value("${OPEN_AI.KEY}")
    private String API_KEY;

    @TrackExecutionTime
    @Transactional
    public DataResponse<CreateOpenAIResDto> askGPT(Principal principal, TalkReqDto talkReqDto) throws Exception {
        Gson gson = new Gson();

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(API_KEY);

        //요청을 담을 메세지 리스트
        List<OpenAIMessageDto> messages = new ArrayList<>();

        //이전 대화를 담을 리스트
        List<OpenAIMessageDto> chatList = new ArrayList<>();


        //이전 대화가 없을 경우
        if(!cacheService.hasCache(talkReqDto.getTalkId())) {
            String concept = "";

            if(talkReqDto.getTalkFile()!=null) concept = createConcept(principal, talkReqDto.getTalkId(), null);
            else concept = createConcept(principal, talkReqDto.getTalkId(), talkReqDto.getPrompt());

            // AI 역할부여
            OpenAIMessageDto messageDtoAI = OpenAIMessageDto
                    .builder()
                    .role("assistant")
                    .content(concept)
                    .build();

            //메세지 리스트에 담기
            messages.add(messageDtoAI);

        //이전 대화가 있을 경우 내용을 가져와서 추가
        } else {
            List<OpenAIMessageDto> previousChatDataList
                    = cacheService.getAllPreviousChatData(talkReqDto.getTalkId());
            messages.addAll(previousChatDataList);
        }


        // user 인풋
        if(talkReqDto.getTalkFile() != null) {
            OpenAIMessageDto messageDtoUser = OpenAIMessageDto
                    .builder()
                    .role("user")
                    .content(talkReqDto.getPrompt())
                    .build();
            messages.add(messageDtoUser);
        }

        //요청Dto
        OpenAIReqDto requestDto = OpenAIReqDto
                .builder()
                .max_tokens(80)
                .messages(messages)
                .build();
        String jsonString = gson.toJson(requestDto);

        String body = String.format(jsonString);
        HttpEntity<String> entity = new HttpEntity<>(body, headers);

        //HTTP 요청
        ResponseEntity<OpenAIResDto> response = restTemplate.exchange(ENDPOINT_URL, HttpMethod.POST, entity, OpenAIResDto.class);

        //현재 요청과 응답 캐싱
        OpenAIMessageDto responseDto = OpenAIMessageDto
                .builder()
                .role("assistant")
                .content(response.getBody().getChoices()[0].getMessage().getContent())
                .build();

        chatList.addAll(messages);
        chatList.add(responseDto);
        cacheService.cacheTalkData(talkReqDto.getTalkId(), chatList);

        for(OpenAIMessageDto content : chatList){
            System.out.println(content.getRole() + " : " +content.getContent());
        }

        // 사용자 질문 DB 저장
        CreateTalkDetailReqDto userReqDto = CreateTalkDetailReqDto.builder()
                .talkId(talkReqDto.getTalkId())
                .isMember(true)
                .content(talkReqDto.getPrompt())
                .talkFile(talkReqDto.getTalkFile())
                .build();

        DataResponse<TalkDetail> userReqDataResponse = talkService.createTalkDetail(userReqDto);

    
        /* GPT 응답 TTS 변환 및 DB 저장 */
        
        MultipartFile GPTResponseFile = ttsService.UseTTS(responseDto.getContent());

        CreateTalkDetailReqDto systemResDto = CreateTalkDetailReqDto.builder()
                .talkId(talkReqDto.getTalkId())
                .isMember(false)
                .content(responseDto.getContent())
                .talkFile(GPTResponseFile)
                .build();

        DataResponse<TalkDetail> systemResDataResponse = talkService.createTalkDetail(systemResDto);


        // 비동기 문법 체크
        if(talkReqDto.getTalkFile() != null) {
            webClientUtil.checkGrammarAsync(API_KEY, ENDPOINT_URL, talkReqDto)
                    .subscribe(
                            res -> {
                                // TODO: 응답에 기반한 추가 로직을 여기에 구현합니다.
                                // 예: 응답을 분석하고 데이터베이스에 저장하기

                                TalkDetail talkDetail = talkDetailRepository.findById(userReqDataResponse.getData().getId())
                                        .orElseThrow(() -> new CustomException(ExceptionStatus.TALK_DETAIL_NOT_FOUND));

                                // 문법 조언 DB 저장
                                talkDetail.updateGrammerAdvise(String.valueOf(res.getChoices()[0].getMessage().getContent()));
                                // 비동기기 때문에 Transaction의 영향을 안받기에 반드시 강제 저장 해야함.
                                talkDetailRepository.save(talkDetail);
                            },
                            err -> {
                                // 오류 발생 시 로깅 또는 다른 오류 처리 로직을 구현합니다.
                                log.error("Error occurred: ", err);
                            }
                    );
        }


        //응답 반환
        CreateOpenAIResDto openAIResDto = CreateOpenAIResDto
                .builder()
                .responseMessage(responseDto.getContent())
                .responseS3URL(systemResDataResponse.getData().getTalkFile())
                .build();

        return new DataResponse<>(ResponseStatus.CREATED_SUCCESS.getCode(),
                ResponseStatus.CREATED_SUCCESS.getMessage(), openAIResDto);
    }

    //토픽처리
    public DataResponse<CreateOpenAIResDto> askTopic(Principal principal, TopicReqDto topicReqDto) throws Exception {
        TalkReqDto talkReqDto = TalkReqDto
                .builder()
                .talkId(topicReqDto.getTalkId())
                .prompt(topicReqDto.getTopic())
                .talkFile(null)
                .build();


        return askGPT(principal, talkReqDto);
    }




    //상황 설정하기
    private String createConcept(Principal principal, Long talkId, String topic){
        NPC npc = getNPCEntity(talkId);

        String npcJob = npc.getNpcRole();
        String npcName = npc.getName();
        int npcAge = npc.getNpcAge();
        String language = npc.getWorld().getLanguage().toString();
        String npcGender = npc.getGenderType().toString();
        String npcSituation = npc.getSituation();

        String nickname = getNickname(principal);

        String concept =  "\n" +
                "We are trying to do situational comedy. " +
                "The user is a beginner who has just started learning " + language + ". " +
                "user nickname is " +nickname+ ". " +
                "The user's " + language +" level is Beginner, and " +
                "All you have to do is respond appropriately to what the user says. " +
                "The level of difficulty in responding should be relaxed so that users can understand it. " +
                "Lower the level of difficulty in responding " +
                "Please ask the appropriate questions so that the conversation can continue. " +
                "And also, Please respond in complete sentences without exceeding max_token. " +
                "Now, " + "you are " +npcName +", and " + npcGender +
                " and " + npcJob + ", and " + "your age is " + npcAge
                + ". and This is your situation. " +npcSituation;

        if(topic != null) {
            concept += " Now let's talk about " +topic+
                    ". Ask questions or stories about " +topic+ " to the user according to the situation. ";
        }

        return concept;
    }


    private NPC getNPCEntity(Long talkId){
        Talk talk = talkRepository.findById(talkId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.TALK_NOT_FOUND));

        return talk.getMemberNPC().getNpc();
    }

    private String getNickname(Principal principal){
        Long memberId = Long.valueOf(principal.getName());
        return memberRepository.findById(memberId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_NOT_FOUND)).getNickname();
    }
}
