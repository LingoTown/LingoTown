package com.lingotown.domain.talk.service;

import com.google.gson.Gson;
import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.domain.talk.dto.request.CreateTalkDetailReqDto;
import com.lingotown.domain.talk.dto.request.OpenAIMessageDto;
import com.lingotown.domain.talk.dto.request.OpenAIReqDto;
import com.lingotown.domain.talk.dto.request.TalkReqDto;
import com.lingotown.domain.talk.dto.response.CreateOpenAIResDto;
import com.lingotown.domain.talk.dto.response.OpenAIResDto;
import com.lingotown.domain.talk.entity.Talk;
import com.lingotown.domain.talk.repository.TalkRepository;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import com.lingotown.global.service.CacheService;
import com.lingotown.global.util.WebClientUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class OpenAIService {

    private final WebClientUtil webClientUtil;

    private final CacheService cacheService;
    private final TalkService talkService;
    private final TalkRepository talkRepository;

    @Value("${OPEN_AI.URL}")
    private String ENDPOINT_URL;

    @Value("${OPEN_AI.KEY}")
    private String API_KEY;

    @Transactional
    public DataResponse<CreateOpenAIResDto> askGPT(TalkReqDto talkReqDto) throws IOException {

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

            String concept = createConcept(talkReqDto.getTalkId());

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
        OpenAIMessageDto messageDtoUser = OpenAIMessageDto
                .builder()
                .role("user")
                .content(talkReqDto.getPrompt())
                .build();

        //요청Dto
        messages.add(messageDtoUser);
        OpenAIReqDto requestDto = OpenAIReqDto
                .builder()
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

        //DB에 저장
        CreateTalkDetailReqDto userReqDto
                = new CreateTalkDetailReqDto(talkReqDto.getTalkId(), true, talkReqDto.getPrompt(), talkReqDto.getTalkFile());
        talkService.createTalkDetail(userReqDto);

        CreateTalkDetailReqDto systemReqDto
                = new CreateTalkDetailReqDto(talkReqDto.getTalkId(), false, responseDto.getContent(), talkReqDto.getTalkFile());
        talkService.createTalkDetail(systemReqDto);

        // 비동기 문법 체크
        Mono<String> checkGrammarMono = webClientUtil.checkGrammarAsync(API_KEY, ENDPOINT_URL, talkReqDto.getPrompt(), res -> {
            // CallBack
            log.info("|||||||||||||||||||||||||||||||||||||||||||");
            log.info("Grammer Check Response : " + res);
            log.info("|||||||||||||||||||||||||||||||||||||||||||");
        });

        //응답 반환
        CreateOpenAIResDto openAIResDto = CreateOpenAIResDto
                .builder()
                .responseMessage(responseDto.getContent())
                .build();

        return new DataResponse(ResponseStatus.CREATED_SUCCESS.getCode(),
                ResponseStatus.CREATED_SUCCESS.getMessage(), openAIResDto);
    }


    //GPT에게 상황설명하기
    private String createConcept(Long talkId){
        NPC npc = getNPCEntity(talkId);

        String npcJob = npc.getNpcRole().toString();
        String npcAge = npc.getNpcAge().toString();
        String language = npc.getWorld().getLanguage().toString();
        String npcGender = npc.getGenderType().toString();

        String concept = "\n" +
                "We are trying to do situational comedy. " +
                "The user is a beginner who has just started learning " + language + ". " +
                "The user's " + language +" level is Beginner, and " +
                "All you have to do is respond appropriately to what the user says. " +
                "The level of difficulty in responding should be relaxed so that users can understand it. " +
                "Lower the level of difficulty in responding " +
                "And also, Please respond in complete sentences without exceeding max_token. " +
                "Now, " + "you are " + npcGender + " and " + npcJob + ", and " + "your age is " + npcAge;

        return concept;
    }


    //대화를 하고 있는 NPC 정보 가져오기
    private NPC getNPCEntity(Long talkId){
        Talk talk = talkRepository.findById(talkId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.TALK_NOT_FOUND));

        NPC npc = talk.getMemberNPC().getNpc();
        return npc;
    }
}
