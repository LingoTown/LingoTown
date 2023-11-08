package com.lingotown.global.util;

import com.lingotown.domain.talk.dto.request.OpenAIMessageDto;
import com.lingotown.domain.talk.dto.request.OpenAIReqDto;
import com.lingotown.domain.talk.dto.request.TalkReqDto;
import com.lingotown.domain.talk.dto.response.OpenAIResDto;
import com.lingotown.global.config.WebClientConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;


@Slf4j
@Component
@RequiredArgsConstructor
public class WebClientUtil {

    private final WebClientConfig webClientConfig;

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


//    public Mono<PronunciationResDto> checkPronunciationAsync(
//            String speechKey, String speechUrl, String language, MultipartFile multipartFile) throws IOException {
//
//        // 파일 처리 로직
//        if (multipartFile.isEmpty()) {
//            logger.error("File is empty");
//            return Mono.error(new IllegalStateException("File is empty"));
//        }
//
//        File tempFile = Files.createTempFile("uploaded_", multipartFile.getOriginalFilename()).toFile();
//        multipartFile.transferTo(tempFile);
//        FileSystemResource fileResource = new FileSystemResource(tempFile);
//
//        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
//        body.add("user_audio_file", fileResource);
//        body.add("question_info", "u1/q1");
//        body.add("include_ielts_feedback", "1");
//
//        String fullUrl = UriComponentsBuilder.fromHttpUrl(speechUrl)
//                .queryParam("key", speechKey)
//                .queryParam("dialect", language)
//                .toUriString();
//
//        // WebClient를 사용한 비동기 요청 전송 및 응답 처리
//        return WebClient.create()
//                .post()
//                .uri(fullUrl)
//                .contentType(MediaType.MULTIPART_FORM_DATA)
//                .bodyValue(body)
//                .retrieve()
//                .onStatus(HttpStatus::isError, clientResponse ->
//                        clientResponse.bodyToMono(String.class)  // 에러 응답의 바디를 String으로 변환
//                                .flatMap(errorBody -> {
//                                    logger.error("API 요청 실패: {}", errorBody);
//                                    return Mono.error(new RuntimeException("API 요청 실패: " + errorBody));
//                                })
//                )
//                .bodyToMono(PronunciationResDto.class)
//                .doOnNext(pronunciationResDto ->
//                        logger.info("API 요청 성공: {}", pronunciationResDto)
//                )
//                .doOnError(error ->
//                        logger.error("API 요청 중 에러 발생: {}", error.getMessage())
//                )
//                .doFinally(signalType ->
//                        cleanupTempFile(tempFile)  // 임시 파일 정리
//                );
//    }
//
//    private void cleanupTempFile(File tempFile) {
//        boolean deleted = tempFile.delete();
//        if (!deleted) {
//            logger.error("임시 파일 삭제 실패: {}", tempFile.getAbsolutePath());
//        }
//    }
//}

}

