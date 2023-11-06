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
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.ExchangeFilterFunction;
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
    private static final Logger logger = LoggerFactory.getLogger(WebClientUtil.class);

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



    public Mono<PronunciationResDto> checkPronunciationAsync(
            String speechKey, String speechUrl, String language, MultipartFile multipartFile) throws IOException {

        if (multipartFile.isEmpty()) {
            logger.error("파일이 비어 있거나 제공되지 않았습니다.");
            return Mono.error(new IllegalStateException("파일이 비어 있거나 존재하지 않습니다."));
        }

        File tempFile = Files.createTempFile("uploaded_", multipartFile.getOriginalFilename()).toFile();
        multipartFile.transferTo(tempFile);
        FileSystemResource fileResource = new FileSystemResource(tempFile);

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("user_audio_file", fileResource);
        body.add("question_info", "u1/q1");
        body.add("include_ielts_feedback", "1");

        String fullUrl = UriComponentsBuilder.fromHttpUrl(speechUrl)
                .queryParam("key", speechKey)
                .queryParam("dialect", language)
                .toUriString();

        log.debug("fullUrl : " +fullUrl);
        log.debug("user_audio_file : " +body.get("user_audio_file"));
        log.debug("question_info : " +body.get("question_info"));
        log.debug("include_ielts_feedback : " +body.get("include_ielts_feedback"));

        // WebClient를 사용한 비동기 요청 전송 및 응답 처리
        return webClientConfig.webClient().post()
                .uri(fullUrl)
                .contentType(MediaType.MULTIPART_FORM_DATA)
                .bodyValue(body)
                .retrieve()
                .onStatus(HttpStatus::isError, clientResponse ->
                        Mono.error(new RuntimeException("API 요청 실패"))
                )
                .bodyToMono(PronunciationResDto.class)
                .doOnNext(pronunciationResDto ->
                        logger.info("API 요청 성공: {}", pronunciationResDto)
                )
                .doOnError(error ->
                        logger.error("API 요청 중 에러 발생", error)
                )
                .doFinally(signalType ->
                        cleanupTempFile(tempFile)
                );
    }

    private void cleanupTempFile(File file) {
        boolean deleteSuccess = file.delete();
        if (!deleteSuccess) {
            logger.error("Failed to delete temporary file: {}", file.getAbsolutePath());
        }
    }


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
//        body.add("include_ielts_feedback", "1");
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
//        ResponseEntity<PronunciationResDto> response = restTemplate.postForEntity(fullUrl, requestEntity, PronunciationResDto.class);
//
//        // 임시 파일을 삭제합니다.
//        boolean deleted = tempFile.delete();
//        if (!deleted) {
//            logger.error("임시 파일을 삭제하는 데 실패했습니다: " + tempFile.getAbsolutePath());
//        }
//
//        // 응답 본문을 반환합니다.
//        if (response.getStatusCode() == HttpStatus.OK) {
//            return response.getBody();
//        } else {
//            throw new RuntimeException("요청 중 오류 발생: " + response.getStatusCode());
//        }
//    }


    }
