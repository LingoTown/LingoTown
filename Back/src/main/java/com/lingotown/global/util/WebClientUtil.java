package com.lingotown.global.util;

import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.domain.talk.dto.request.OpenAIMessageDto;
import com.lingotown.domain.talk.dto.request.OpenAIReqDto;
import com.lingotown.domain.talk.dto.request.PronunciationReqDto;
import com.lingotown.domain.talk.dto.request.TalkReqDto;
import com.lingotown.domain.talk.dto.response.OpenAIResDto;
import com.lingotown.domain.talk.dto.response.PronunciationResDto;
import com.lingotown.domain.talk.entity.Talk;
import com.lingotown.global.config.WebClientConfig;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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

        return webClientConfig.webClient().method(HttpMethod.POST)
                .uri(url)
                .bodyValue(requestDto)
                .retrieve()
                .bodyToMono(responseDtoClass);
    }

    public Mono<OpenAIResDto> checkGrammarAsync(String GPTKey, String GPTUrl, TalkReqDto talkReqDto) {

        // user 인풋
        OpenAIMessageDto messageDtoUser = OpenAIMessageDto
                .builder()
                .role("user")
                .content(talkReqDto.getPrompt() + "  이 문장에 어떤 문법적 오류가 있는지 확인해줘. 한글로 대답해줘.")
                .build();


        List<OpenAIMessageDto> messages = new ArrayList<>();

        //요청Dto
        messages.add(messageDtoUser);
        OpenAIReqDto requestDto = OpenAIReqDto
                .builder()
                .max_tokens(100)
                .messages(messages)
                .build();

        return webClientConfig.webClient().post()
                .uri(GPTUrl)
                .headers(headers -> {
                    headers.setBearerAuth(GPTKey); // 여기에 실제 GPT API 키를 설정합니다.
                    headers.setContentType(MediaType.APPLICATION_JSON);
                })
                .body(BodyInserters.fromValue(requestDto)) // 준비된 DTO를 바디에 삽입합니다.
                .retrieve()
                .bodyToMono(OpenAIResDto.class);
    }


    public Mono<PronunciationResDto> checkPronunciationAsync(String speechKey, String language, String speechUrl, TalkReqDto talkReqDto) {

        PronunciationReqDto reqDto = PronunciationReqDto
                .builder()
                .text(talkReqDto.getPrompt())
                .user_audio_file(talkReqDto.getTalkFile())
                .build();


        return webClientConfig.webClient().post()
                .uri(uriBuilder -> uriBuilder
                        .path(speechUrl)
                        .queryParam("key", speechKey)
                        .queryParam("dialect", language)
                        .build()
                )
                .body(BodyInserters.fromValue(reqDto))
                .retrieve()
                .bodyToMono(PronunciationResDto.class);
    }

}
