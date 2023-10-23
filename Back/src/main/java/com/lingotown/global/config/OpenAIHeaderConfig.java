package com.lingotown.global.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class OpenAIHeaderConfig {

    @Value("${openai.api.secret-key}")
    private String openAIKey;


    @Bean   //RestTemplate 요청을 보낼 때 헤더 수정
    public RestTemplate openaiRestTemplate() {
        RestTemplate restTemplate = new RestTemplate();

        restTemplate.getInterceptors().add((request, body, execution) -> {
            request.getHeaders().add("Authorization", "Bearer " + openAIKey);
            request.getHeaders().add("Content-type", "application/json");
            return execution.execute(request, body);
        });

        return restTemplate;
    }
}
