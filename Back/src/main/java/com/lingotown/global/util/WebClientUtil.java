package com.lingotown.global.util;

import com.lingotown.domain.talk.dto.request.OpenAIMessageDto;
import com.lingotown.domain.talk.dto.request.OpenAIReqDto;
import com.lingotown.domain.talk.dto.request.TalkReqDto;
import com.lingotown.domain.talk.dto.response.OpenAIResDto;
import com.lingotown.domain.talk.dto.response.speechace.PronunciationResDto;
import com.lingotown.domain.talk.dto.response.speechace.SpeechScoreResDto;
import com.lingotown.domain.talk.entity.TalkDetail;
import com.lingotown.global.config.WebClientConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Slf4j
@Component
@RequiredArgsConstructor
public class WebClientUtil {

    private final WebClientConfig webClientConfig;

//    public <T> T get(String url, Class<T> responseDtoClass) {
//        return webClientConfig.webClient().method(HttpMethod.GET)
//                .uri(url)
//                .retrieve()
//                .bodyToMono(responseDtoClass)
//                .block();
//    }
//
//    public <T, V> Mono<T> post(String url, V requestDto, Class<T> responseDtoClass) {
//
//        return webClientConfig.webClient().method(HttpMethod.POST)
//                .uri(url)
//                .bodyValue(requestDto)
//                .retrieve()
//                .bodyToMono(responseDtoClass);
//    }

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


    public Mono<PronunciationResDto> checkPronunciationAsync(String speechKey, String speechUrl, String language, TalkReqDto talkReqDto) throws IOException {

        if (!talkReqDto.getTalkFile().isEmpty()) {
            MultipartBodyBuilder bodyBuilder = new MultipartBodyBuilder();

            bodyBuilder.part("user_audio_file",talkReqDto.getTalkFile().getResource());
            bodyBuilder.part("question_info", "u1/q1");
            bodyBuilder.part("include_ielts_feedback", "1");

            System.out.println("user_audio_file : " + Arrays.toString(talkReqDto.getTalkFile().getBytes()));

            String fullUrl = UriComponentsBuilder
                    .fromUriString(speechUrl)
                    .queryParam("key", speechKey)
                    .queryParam("dialect", language)
                    .build()
                    .toUriString();

            Mono<PronunciationResDto> pronunciationResDto = webClientConfig.webClient().post()
                    .uri(fullUrl)
                    .contentType(MediaType.MULTIPART_FORM_DATA)
                    .body(BodyInserters.fromMultipartData(bodyBuilder.build()))
                    .retrieve()
                    .bodyToMono(PronunciationResDto.class);

            pronunciationResDto.subscribe(pronunciationResDtoValue -> {
                System.out.println("Pronunciation response: " + pronunciationResDtoValue);
            }, error -> {
                error.printStackTrace();
            });

            return pronunciationResDto;
        } else {
            // 파일이 비어있는 경우 오류를 처리합니다.
            System.err.println("The file is empty or not present");
            return Mono.error(new IllegalStateException("The file is empty or not present"));
        }

    }


}
