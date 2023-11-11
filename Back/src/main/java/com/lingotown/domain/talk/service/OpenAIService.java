package com.lingotown.domain.talk.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.domain.talk.dto.request.*;
import com.lingotown.domain.talk.dto.response.CreateOpenAIResDto;
import com.lingotown.domain.talk.dto.response.OpenAIResDto;
import com.lingotown.domain.talk.dto.response.speechsuper.PronunciationResDto;
import com.lingotown.domain.talk.dto.response.speechsuper.ResultResDto;
import com.lingotown.domain.talk.dto.response.speechsuper.WordResDto;
import com.lingotown.domain.talk.entity.SentenceScore;
import com.lingotown.domain.talk.entity.Talk;
import com.lingotown.domain.talk.entity.TalkDetail;
import com.lingotown.domain.talk.entity.VocaScore;
import com.lingotown.domain.talk.repository.SentenceScoreRepository;
import com.lingotown.domain.talk.repository.TalkDetailRepository;
import com.lingotown.domain.talk.repository.TalkRepository;
import com.lingotown.domain.talk.repository.VocaScoreRepository;
import com.lingotown.global.aspect.ExecuteTime.TrackExecutionTime;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import com.lingotown.global.service.CacheService;
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
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;
import reactor.util.function.Tuples;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class OpenAIService {

    private final WebClientUtil webClientUtil;
    private final TalkRepository talkRepository;
    private final MemberRepository memberRepository;
    private final TalkDetailRepository talkDetailRepository;
    private final SentenceScoreRepository sentenceScoreRepository;
    private final VocaScoreRepository vocaScoreRepository;
    private final CacheService cacheService;
    private final TalkService talkService;
    private final TTSService ttsService;

    @Value("${OPEN_AI.URL}")
    private String ENDPOINT_URL;

    @Value("${OPEN_AI.KEY}")
    private String API_KEY;

    @Value("${SPEECH_SUPER.URL}")
    private String SPEECH_URL;

    @Value("${SPEECH_SUPER.APP_KEY}")
    private String SPEECH_APP_KEY;

    @Value("${SPEECH_SUPER.SECRET_KEY}")
    private String SPEECH_SECRET_KEY;

    //발음평가 테스트
    public String checkPronunciation(TalkReqDto talkReqDto) throws NoSuchAlgorithmException, IOException {
        return webClientUtil.checkPronunciation(SPEECH_URL, SPEECH_APP_KEY, SPEECH_SECRET_KEY, talkReqDto);
    }

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
        if (!cacheService.hasCache(talkReqDto.getTalkId())) {
            String concept = "";

            if (talkReqDto.getTalkFile() != null) concept = createConcept(principal, talkReqDto.getTalkId(), null);
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
        if (talkReqDto.getTalkFile() != null) {
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
                .max_tokens(50)
                .messages(messages)
                .build();
        String jsonString = gson.toJson(requestDto);

        String body = jsonString;
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


//        /*  사용자 질문 DB 저장 및 비동기 문법, 발음 체크 */
//        if (talkReqDto.getTalkFile() != null) {
//
//            // 사용자 질문 DB 저장
//            CreateTalkDetailReqDto userReqDto = CreateTalkDetailReqDto.builder()
//                    .talkId(talkReqDto.getTalkId())
//                    .isMember(true)
//                    .content(talkReqDto.getPrompt())
//                    .talkFile(talkReqDto.getTalkFile())
//                    .build();
//
//            Mono<DataResponse<TalkDetail>> saveTalkDetailMono = Mono.fromCallable(() -> talkService.createTalkDetail(userReqDto));
//            TalkDetail savedTalkDetail = talkService.createTalkDetail(userReqDto).getData();
//            talkDetailRepository.save(savedTalkDetail);
//
//
//            saveTalkDetailMono.flatMap(userReqDataResponse -> {
//                        try {
//                            // 발음 체크를 실행
//                            return webClientUtil.checkPronunciationAsync(SPEECH_URL, SPEECH_APP_KEY, SPEECH_SECRET_KEY, talkReqDto)
//                                    .map(pronunciationResDtoAsString -> {
//
//                                        // JSON 문자열을 PronunciationResDto 객체로 변환
//                                        PronunciationResDto pronunciationResDto;
//                                        try {
//                                            pronunciationResDto = new ObjectMapper().readValue(pronunciationResDtoAsString, PronunciationResDto.class);
//                                        } catch (JsonProcessingException e) {
//                                            throw new RuntimeException(e);
//                                        }
//
//                                        TalkDetail talkDetail = userReqDataResponse.getData();
//
//                                        ResultResDto resultResDto = pronunciationResDto.getResult();
//                                        SentenceScore sentenceScore = SentenceScore.builder()
//                                                .overallScore(resultResDto.getOverall())
//                                                .pronunciationScore(resultResDto.getPronunciation())
//                                                .fluencyScore(resultResDto.getFluency())
//                                                .integrityScore(resultResDto.getIntegrity())
//                                                .rhythmScore(resultResDto.getRhythm())
//                                                .talkDetail(talkDetail)
//                                                .build();
//
//                                        sentenceScoreRepository.save(sentenceScore);
//
//                                        for (WordResDto word : pronunciationResDto.getResult().getWords()) {
//                                            VocaScore vocaScore = VocaScore.builder()
//                                                    .word(word.getWord())
//                                                    .score(word.getScores().getOverall())
//                                                    .talkDetail(talkDetail)
//                                                    .build();
//
//                                            vocaScoreRepository.save(vocaScore);
//                                        }
//
//                                        return Tuples.of(userReqDataResponse, pronunciationResDto);
//                                    });
//                        } catch (IOException e) {
//                            return Mono.error(new RuntimeException(e));
//                        }
//                    })
//                    .subscribe(tuple -> {
//                        log.info(String.valueOf(tuple));
//                    }, err -> {
//                        // 오류 처리
//                        log.error("Error occurred: ", err);
//                    });
//        }


        // 발음 체크 비동기 처리 시작
        if (talkReqDto.getTalkFile() != null) {
            CreateTalkDetailReqDto userReqDto = CreateTalkDetailReqDto.builder()
                    .talkId(talkReqDto.getTalkId())
                    .isMember(true)
                    .content(talkReqDto.getPrompt())
                    .talkFile(talkReqDto.getTalkFile())
                    .build();

            // talkService를 통해 TalkDetail을 생성하고 바로 저장합니다.
            TalkDetail savedTalkDetail = talkService.createTalkDetail(userReqDto).getData();
            talkDetailRepository.save(savedTalkDetail);
            
            webClientUtil.checkPronunciationAsync(SPEECH_URL, SPEECH_APP_KEY, SPEECH_SECRET_KEY, talkReqDto)
                    .map(pronunciationResDtoAsString -> {
                        // JSON 문자열을 PronunciationResDto 객체로 변환
                        PronunciationResDto pronunciationResDto;
                        try {
                            pronunciationResDto = new ObjectMapper().readValue(pronunciationResDtoAsString, PronunciationResDto.class);
                        } catch (JsonProcessingException e) {
                            throw new RuntimeException(e);
                        }

                        // 결과를 DB에 저장
                        ResultResDto resultResDto = pronunciationResDto.getResult();
                        SentenceScore sentenceScore = SentenceScore.builder()
                                .overallScore(resultResDto.getOverall())
                                .pronunciationScore(resultResDto.getPronunciation())
                                .fluencyScore(resultResDto.getFluency())
                                .integrityScore(resultResDto.getIntegrity())
                                .rhythmScore(resultResDto.getRhythm())
                                .talkDetail(savedTalkDetail)
                                .build();
                        sentenceScoreRepository.save(sentenceScore);

                        // 개별 단어 점수 저장
                        for (WordResDto word : pronunciationResDto.getResult().getWords()) {
                            VocaScore vocaScore = VocaScore.builder()
                                    .word(word.getWord())
                                    .score(word.getScores().getOverall())
                                    .talkDetail(savedTalkDetail)
                                    .build();
                            vocaScoreRepository.save(vocaScore);
                        }
                        return pronunciationResDto;
                    })
                    .subscribe(pronunciationResDto -> {
                        // 비동기 처리 결과를 로깅
                        log.info("Pronunciation check completed: {}", pronunciationResDto);
                    }, err -> {
                        // 오류 처리
                        log.error("Error occurred during pronunciation check: ", err);
                    });
        }

        /* GPT 응답 TTS 변환 및 DB 저장 */
        MultipartFile GPTResponseFile = ttsService.UseTTS(responseDto.getContent(), talkReqDto);

        CreateTalkDetailReqDto systemResDto = CreateTalkDetailReqDto.builder()
                .talkId(talkReqDto.getTalkId())
                .isMember(false)
                .content(responseDto.getContent())
                .talkFile(GPTResponseFile)
                .build();

        DataResponse<TalkDetail> systemResDataResponse = talkService.createTalkDetail(systemResDto);

        //응답 반환
        CreateOpenAIResDto openAIResDto = CreateOpenAIResDto
                .builder()
                .responseMessage(responseDto.getContent())
                .responseS3URL(systemResDataResponse.getData().getTalkFile())
                .build();

        talkDetailRepository.save(systemResDataResponse.getData());

        return new DataResponse<>(ResponseStatus.CREATED_SUCCESS.getCode(),
                ResponseStatus.CREATED_SUCCESS.getMessage(), openAIResDto);
    }

    @Transactional
    public DataResponse<CreateOpenAIResDto> askTopic(Principal principal, TopicReqDto topicReqDto) throws Exception {
        TalkReqDto talkReqDto = TalkReqDto
                .builder()
                .talkId(topicReqDto.getTalkId())
                .prompt(topicReqDto.getTopic())
                .language(topicReqDto.getLanguage())
                .talkFile(null)
                .build();

        return askGPT(principal, talkReqDto);
    }

    //상황 설정 하기
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
                "You need to level your response to about eight years old, so that users can understand it. " +
                "Please ask the appropriate questions so that the conversation can continue. " +
                "The important thing is that it should be a complete sentence without exceeding 50token which is max_token. " +
                "So you should only respond to the core content. " +
                "The sentence should not be interrupted in the sentence should not be interrupted. " +
                "It is very important. If you think it's going to cut off in the middle, please finish responding before that sentence. " +
                "And always put '.' at the end of the sentence. " +

                "Now, " + "you are " +npcName +", and " + npcGender +
                " and " + npcJob + ", and " + "your age is " + npcAge +
                ". and This is your situation. " +npcSituation+ ". " +
                "You don't have to put your name in front of the response. " +
                "And It is very important thing. If you can't answer in a skit I've created, think you're a person and answer appropriately. ";

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
