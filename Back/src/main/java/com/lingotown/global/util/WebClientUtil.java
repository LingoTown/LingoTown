package com.lingotown.global.util;

import com.lingotown.global.config.WebClientConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;


@Slf4j
@Component
@RequiredArgsConstructor
public class WebClientUtil {

    private final WebClientConfig webClientConfig;

    public <T> T get(String url, Class<T> responseDtoClass) {
        return webClientConfig.webClient().method(HttpMethod.GET)
                .uri(url)
                .retrieve()
                .bodyToMono(responseDtoClass)
                .block();
    }

    public <T, V> Mono<T> post(String url, V requestDto, Class<T> responseDtoClass) {

        log.info("url={}", url);

        return webClientConfig.webClient().method(HttpMethod.POST)
                .uri(url)
                .bodyValue(requestDto)
                .retrieve()
                .bodyToMono(responseDtoClass);
    }

    public Mono<String> checkGrammarAsync(String GPTKey, String GPTUrl, String prompt, Consumer<String> callback) {
        // GPT-3 API에 필요한 요청 바디 구성 (예시입니다. 실제 요청 바디 구조에 따라 변경해야 할 수 있습니다.)
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("prompt", prompt + "에서 문법 오류를 찾아서 간단하게 알려줘.");
        requestBody.put("max_tokens", 50); // 예시로 사용된 파라미터입니다.

        return webClientConfig.webClient().post()
                .uri(GPTUrl)
                .headers(headers -> {
                    headers.setBearerAuth(GPTKey); // 여기에 실제 GPT API 키를 설정해야 합니다.
                    headers.setContentType(MediaType.APPLICATION_JSON);
                })
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .doOnSuccess(response -> {
                    // 성공적으로 완료되면 콜백 함수 실행
                    if (callback != null) {
                        callback.accept(response);
                    }
                });
    }
}
