package com.lingotown.global.util;

import com.lingotown.domain.talk.dto.request.OpenAIMessageDto;
import com.lingotown.domain.talk.dto.request.OpenAIReqDto;
import com.lingotown.domain.talk.dto.request.TalkReqDto;
import com.lingotown.domain.talk.dto.response.OpenAIResDto;
import com.lingotown.domain.talk.dto.response.speechace.PronunciationResDto;
import com.lingotown.global.config.WebClientConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.ExchangeFilterFunction;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Mono;

import java.awt.event.ItemListener;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;


@Slf4j
@Component
@RequiredArgsConstructor
public class WebClientUtil {

    private final WebClientConfig webClientConfig;
    //private static final Logger logger = LoggerFactory.getLogger(WebClientUtil.class);

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


//    public PronunciationResDto checkPronunciationSync(String speechKey, String speechUrl, String language, MultipartFile talkFile) throws IOException {
//        if (talkFile == null || talkFile.isEmpty()) {
//            throw new IllegalStateException("파일이 비어 있거나 존재하지 않습니다.");
//        }
//
//        // 임시 파일을 생성합니다.
//        File tempFile = File.createTempFile("uploaded_", talkFile.getOriginalFilename());
//        talkFile.transferTo(tempFile);
//
//        // HttpHeaders를 생성하고 멀티파트 형식으로 설정합니다.
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
//
//        // 멀티 파트 요청을 위한 바디를 구성합니다.
//        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
//        body.add("user_audio_file", new FileSystemResource(tempFile));
//        body.add("question_info", "u1/q1");
//        body.add("include_ielts_feedback", 1);
//
//        // URL 쿼리 파라미터를 추가합니다.
//        String fullUrl = UriComponentsBuilder.fromHttpUrl(speechUrl)
//                .queryParam("key", speechKey)
//                .queryParam("dialect", language)
//                .toUriString();
//
//        System.out.println("body : " + body.toString());
//
//        // 요청 엔티티를 생성합니다.
//        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);
//
//        // RestTemplate를 사용하여 동기 요청을 보냅니다.
//        RestTemplate restTemplate = new RestTemplate();
//
//        // 에러 핸들링을 위한 커스텀 에러 핸들러 설정
//        restTemplate.setErrorHandler(new DefaultResponseErrorHandler(){
//            @Override
//            public void handleError(ClientHttpResponse response) throws IOException {
//                // Default behavior, may be omitted if you don't want to handle default cases
//                super.handleError(response);
//            }
//        });
//
//        ResponseEntity<PronunciationResDto> response = null;
//        try {
//            response = restTemplate.postForEntity(fullUrl, requestEntity, PronunciationResDto.class);
//        } catch (HttpClientErrorException | HttpServerErrorException e) {
//            // 오류 응답을 로그에 기록합니다.
//            logger.error("API 요청 중 오류 발생: HTTP 상태 코드: " + e.getStatusCode());
//            logger.error("오류 응답 본문: " + e.getResponseBodyAsString());
//
//            // JSON으로부터 세부 오류 메시지를 파싱하는 로직을 추가합니다.
//            // JSON 파싱은 여기서 예제로 단순화되어 있으나, 실제로는 복잡한 JSON 구조일 수 있습니다.
//            try {
//                JSONObject jsonObject = new JSONObject(e.getResponseBodyAsString());
//                String errorMessage = jsonObject.optString("error_message", "오류 메시지를 파싱할 수 없습니다.");
//                int errorCode = jsonObject.optInt("error_code", -1);
//                logger.error("세부 오류 메시지: " + errorMessage);
//                logger.error("오류 코드: " + errorCode);
//            } catch (JSONException jsonException) {
//                logger.error("JSON 파싱 중 오류 발생", jsonException);
//            }
//            throw e; // Or handle it with custom actions
//        } catch (RestClientException e) {
//            logger.error("API 요청 중 예기치 못한 오류 발생", e);
//            throw new RuntimeException("API 요청 실패", e);
//        } finally {
//            // 임시 파일을 삭제합니다.
//            boolean deleted = tempFile.delete();
//            if (!deleted) {
//                logger.error("임시 파일을 삭제하는 데 실패했습니다: " + tempFile.getAbsolutePath());
//            }
//        }
//
//        // 성공적인 응답 처리
//        if (response != null && response.getStatusCode() == HttpStatus.OK) {
//            return response.getBody();
//        } else {
//            // 이 경우는 일반적으로 에러 핸들러에 의해 처리되므로 발생하지 않을 것입니다.
//            throw new RuntimeException("API 요청이 성공적이지 않았습니다: " + (response != null ? response.getStatusCode() : "응답 없음"));
//        }
//    }
}

