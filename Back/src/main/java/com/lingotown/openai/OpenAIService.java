package com.lingotown.openai;

import com.google.gson.Gson;
import com.lingotown.domain.talk.dto.request.CreateTalkDetailReqDto;
import com.lingotown.domain.talk.service.TalkService;
import com.lingotown.openai.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OpenAIService {

    private final CacheService cacheService;
    private final TalkService talkService;

    @Value("${OPEN_AI.URL}")
    private String ENDPOINT_URL;

    @Value("${OPEN_AI.KEY}")
    private String API_KEY;

    public OpenAIResDto askGPT(TalkReqDto talkReqDto) {

        Gson gson = new Gson();
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(API_KEY);

        //요청을 담을 메세지 리스트
        List<OpenAIMessageDto> messages = new ArrayList<>();

        //이전 대화가 없을 경우
        List<OpenAIMessageDto> chatList = new ArrayList<>();
        if(!cacheService.hasCache(talkReqDto.getTalkId())) {
            String concept = "\n" +
                    "We are trying to do situational comedy. " +
                    "You are now an employee at a traditional Korean restaurant." +
                    "The user is a beginner who has just started learning English. " +
                    "The user's English level is 3rd grade, and you need to respond appropriately. " +
                    "All you have to do is respond appropriately to what the user says. " +
                    "And also, the answer sentence should be within 2 sentences." +
                    "because the tokens must be within 25.";

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

        messages.add(messageDtoUser);

        //요청Dto
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
        OpenAIMessageDto responseDtoUser = OpenAIMessageDto
                .builder()
                .role("assistant")
                .content(response.getBody().getChoices()[0].getMessage().getContent())
                .build();

        chatList.addAll(messages);
        chatList.add(responseDtoUser);
        cacheService.cacheTalkData(talkReqDto.getTalkId(), chatList);
        for(OpenAIMessageDto dto : chatList){
            System.out.println(dto.getRole() + ", " +dto.getContent());
        }

        //DB에 저장
        CreateTalkDetailReqDto talkDetailUserReqDto
                = new CreateTalkDetailReqDto(talkReqDto.getTalkId(), true, talkReqDto.getPrompt(), talkReqDto.getTalkFile());
        talkService.createTalkDetail(talkDetailUserReqDto);

        CreateTalkDetailReqDto talkDetailSystemReqDto
                = new CreateTalkDetailReqDto(talkReqDto.getTalkId(), false, responseDtoUser.getContent(), "1234");
        talkService.createTalkDetail(talkDetailSystemReqDto);

        return response.getBody();
    }


}
