package com.lingotown.openai;

import com.google.gson.Gson;
import com.lingotown.openai.dto.OpenAIMessageDto;
import com.lingotown.openai.dto.OpenAIRequestDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class OpenAIService {

    @Value("${OPEN_AI.URL}")
    private String ENDPOINT_URL;

    @Value("${OPEN_AI.KEY}")
    private String API_KEY;

    public String askGPT(String prompt) {

        Gson gson = new Gson();
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(API_KEY);

        String concept = "You are an employee working at an international airport in the USA, knowledgeable about airport operations and procedures.";

        // AI 역할부여
        OpenAIMessageDto messageDtoAI = OpenAIMessageDto
                .builder()
                .role("system")
                .content(concept)
                .build();

        // user인풋
        OpenAIMessageDto messageDtoUser = OpenAIMessageDto
                .builder()
                .role("user")
                .content(prompt)
                .build();

        // 메시지 리스트에담는다
        List<OpenAIMessageDto> messages = new ArrayList<>();
        messages.add(messageDtoAI);
        messages.add(messageDtoUser);

        OpenAIRequestDto requestDto = OpenAIRequestDto
                .builder()
                .messages(messages)
                .build();

        String jsonString = gson.toJson(requestDto);
        String body = String.format(jsonString);
        HttpEntity<String> entity = new HttpEntity<>(body, headers);

        ResponseEntity<String> response = restTemplate.exchange(ENDPOINT_URL, HttpMethod.POST, entity, String.class);
        return response.getBody();
    }
}
