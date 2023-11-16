package com.lingotown.global.util;

import com.lingotown.domain.talk.dto.request.OpenAIReqDto;
import com.lingotown.domain.talk.dto.request.TalkReqDto;
import com.lingotown.domain.talk.dto.response.OpenAIResDto;
import com.lingotown.global.config.WebClientConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.core.io.buffer.DataBufferUtils;
import org.springframework.core.io.buffer.DefaultDataBufferFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.BodyInserters;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.security.MessageDigest;

@Slf4j
@Component
@RequiredArgsConstructor
public class WebClientUtil {

    private final WebClientConfig webClientConfig;

    public Mono<String> checkPronunciationAsync(String baseUrl, String applicationId, String secretKey, TalkReqDto talkReqDto) throws IOException {

        String coreType = "sent.eval";
        String dict_dialect = "";
        if (talkReqDto.getLanguage().equals("FR")) {
            coreType = "sent.eval.fr";
        } else if (talkReqDto.getLanguage().equals("UK")) {
            dict_dialect = "en_br";
        } else {
            dict_dialect = "en_us";
        }

        String userId = getRandomString(5);

        String params = buildParam(applicationId, secretKey, userId, "mp3", "16000", talkReqDto.getPrompt(), coreType);

        Path tempFilePath = Files.createTempFile(null, ".mp3");
        talkReqDto.getTalkFile().transferTo(tempFilePath.toFile());

        Flux<DataBuffer> fileContentBuffer = DataBufferUtils.read(tempFilePath, new DefaultDataBufferFactory(), 4096);

        MultipartBodyBuilder builder = new MultipartBodyBuilder();
        builder.asyncPart("audio", fileContentBuffer, DataBuffer.class);
        builder.part("text", params, MediaType.APPLICATION_JSON);

        String fullUrl = baseUrl + "/" + coreType;
        if (!talkReqDto.getLanguage().equals("FR")) fullUrl = fullUrl + "?dict_dialect=" +dict_dialect;

        MultiValueMap<String, HttpEntity<?>> multipartBody = builder.build();

       return webClientConfig.webClient().post()
                .uri(fullUrl)
                .header("Request-Index", "0")
                .contentType(MediaType.MULTIPART_FORM_DATA)
                .body(BodyInserters.fromMultipartData(multipartBody))
                .retrieve()
                .bodyToMono(String.class)
                .doFinally(signalType -> {
                    try {
                        Files.deleteIfExists(tempFilePath);
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                });
    }

    public String checkGrammarSync(String baseUrl, String applicationId, String secretKey, TalkReqDto talkReqDto) throws IOException {
        String coreType = "sent.eval";
        String dict_dialect = "";
        if (talkReqDto.getLanguage().equals("FR")) {
            coreType = "sent.eval.fr";
        } else if (talkReqDto.getLanguage().equals("UK")) {
            dict_dialect = "en_br";
        } else {
            dict_dialect = "en_us";
        }

        String userId = getRandomString(5);

        String params = buildParam(applicationId, secretKey, userId, "mp3", "16000", talkReqDto.getPrompt(), coreType);

        Path tempFilePath = Files.createTempFile(null, ".mp3");

        try {
            talkReqDto.getTalkFile().transferTo(tempFilePath.toFile());

            Flux<DataBuffer> fileContentBuffer = DataBufferUtils.read(tempFilePath, new DefaultDataBufferFactory(), 4096);

            MultipartBodyBuilder builder = new MultipartBodyBuilder();
            builder.asyncPart("audio", fileContentBuffer, DataBuffer.class);
            builder.part("text", params, MediaType.APPLICATION_JSON);

            String fullUrl = baseUrl + "/" + coreType;
            if (!talkReqDto.getLanguage().equals("FR")) fullUrl = fullUrl + "?dict_dialect=" +dict_dialect;

            MultiValueMap<String, HttpEntity<?>> multipartBody = builder.build();

            return webClientConfig.webClient().post()
                    .uri(fullUrl)
                    .header("Request-Index", "0")
                    .contentType(MediaType.MULTIPART_FORM_DATA)
                    .body(BodyInserters.fromMultipartData(multipartBody))
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();
        } finally {
            Files.deleteIfExists(tempFilePath);
        }
    }



    private static String buildParam(String appkey, String secretKey, String userId, String audioType,
                                     String audioSampleRate, String refText, String coreType) {

        MessageDigest digest = DigestUtils.getSha1Digest();

        long timeReqMillis = System.currentTimeMillis();
        String connectSigStr = appkey + timeReqMillis + secretKey;
        String connectSig = Hex.encodeHexString(digest.digest(connectSigStr.getBytes()));

        long timeStartMillis = System.currentTimeMillis();
        String startSigStr = appkey + timeStartMillis + userId + secretKey;
        String startSig = Hex.encodeHexString(digest.digest(startSigStr.getBytes()));

        return "{"
                + "\"connect\":{"
                + "\"cmd\":\"connect\","
                + "\"param\":{"
                + "\"sdk\":{"
                + "\"protocol\":2,"
                + "\"version\":16777472,"
                + "\"source\":9"
                + "},"
                + "\"app\":{"
                + "\"applicationId\":\"" + appkey + "\","
                + "\"sig\":\"" + connectSig + "\","
                + "\"timestamp\":\"" + timeReqMillis + "\""
                + "}"
                + "}"
                + "},"
                + "\"start\":{"
                + "\"cmd\":\"start\","
                + "\"param\":{"
                + "\"app\":{"
                + "\"applicationId\":\"" + appkey + "\","
                + "\"timestamp\":\"" + timeStartMillis + "\","
                + "\"sig\":\"" + startSig + "\","
                + "\"userId\":\"" + userId + "\""
                + "},"
                + "\"audio\":{"
                + "\"sampleBytes\":2,"
                + "\"channel\":1,"
                + "\"sampleRate\":" + audioSampleRate + ","
                + "\"audioType\":\"" + audioType + "\""
                + "},"
                + "\"request\":{"
                + "\"refText\":\"" + refText + "\","
                + "\"coreType\":\"" + coreType + "\""
                + "}"
                + "}"
                + "}"
                + "}";
    }

    private static int getRandom(int count) {
        return (int) Math.round(Math.random() * (count));
    }

    private static String charString = "abcdefghijklmnopqrstuvwxyz123456789";

    private static String getRandomString(int length) {
        StringBuilder sb = new StringBuilder();
        int len = charString.length();
        for (int i = 0; i < length; i++) {
            sb.append(charString.charAt(getRandom(len - 1)));
        }
        return sb.toString();
    }
}
