package com.lingotown.global.util;

import com.lingotown.domain.talk.dto.request.OpenAIMessageDto;
import com.lingotown.domain.talk.dto.request.OpenAIReqDto;
import com.lingotown.domain.talk.dto.request.TalkReqDto;
import com.lingotown.domain.talk.dto.response.OpenAIResDto;
import com.lingotown.domain.talk.dto.response.speechsuper.PronunciationResDto;
import com.lingotown.global.config.WebClientConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.ContentBody;
import org.apache.http.entity.mime.content.InputStreamBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
//import org.apache.http.HttpEntity;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.core.io.buffer.DataBufferUtils;
import org.springframework.core.io.buffer.DefaultDataBufferFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.ExchangeFilterFunction;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
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

        System.out.println("body : " +BodyInserters.fromValue(requestDto));

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


    public Mono<String> checkPronunciationAsync(String baseUrl, String applicationId, String secretKey, TalkReqDto talkReqDto) throws IOException {

        String coreType = "sent.eval";
        String dict_dialect = "";
        if (talkReqDto.getLanguage().equals("FR")) {
            coreType = "para.eval.fr";
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

        MultiValueMap<String, HttpEntity<?>> multipartBody = builder.build();

        return webClientConfig.webClient().post()
                .uri(baseUrl + "/" + coreType + "?dict_dialect=" + dict_dialect)
                .header("Request-Index", "0")
                .contentType(MediaType.MULTIPART_FORM_DATA)
                .body(BodyInserters.fromMultipartData(multipartBody))
                .retrieve()
                .bodyToMono(String.class)
                .doOnSuccess(System.out::println)
                .doOnError(e -> {
                    if (e instanceof WebClientResponseException) {
                        WebClientResponseException ex = (WebClientResponseException) e;
                        System.out.println("오류 응답 코드: " + ex.getRawStatusCode() + " 본문: " + ex.getResponseBodyAsString());
                    } else {
                        System.out.println("오류 발생: " + e.getMessage() + " > " +e);
                    }
                })
                .doFinally(signalType -> {
                    try {
                        Files.deleteIfExists(tempFilePath);
                    } catch (IOException e) {
                        System.out.println("임시 파일 삭제 실패: " + tempFilePath +" > " +e);
                    }
                });
    }


    public String checkPronunciation(String baseUrl, String applicationId, String secretKey, TalkReqDto talkReqDto) throws NoSuchAlgorithmException, IOException {
//
//        String coreType = "sent.eval";
//        String dict_dialect = "";
//        if (talkReqDto.getLanguage().equals("FR")) {
//            coreType = "para.eval.fr";
//        } else if (talkReqDto.getLanguage().equals("UK")) {
//            dict_dialect = "en_br";
//        } else {
//            dict_dialect = "en_us";
//        }
//
//        String url = baseUrl + "/" + coreType +"?dict_dialect="+dict_dialect;
//        String userId = getRandomString(5);
//        String res = null;
//
//        CloseableHttpClient httpclient = HttpClients.createDefault();
//        String params = buildParam(applicationId, secretKey, userId, "mp3", "16000", talkReqDto.getPrompt(), coreType);
//
//        try {
//            HttpPost httppost = new HttpPost(url);
//            httppost.addHeader("Request-Index", "0");
//
//            StringBody comment = new StringBody(params, ContentType.APPLICATION_JSON);
//            ContentBody bin = new InputStreamBody(talkReqDto.getTalkFile().getInputStream(), talkReqDto.getTalkFile().getContentType(), talkReqDto.getTalkFile().getOriginalFilename());
//
//            HttpEntity reqEntity = MultipartEntityBuilder.create()
//                    .addPart("text", comment)
//                    .addPart("audio", bin)
//                    .build();
//
//            httppost.setEntity(reqEntity);
//
//            CloseableHttpResponse response = httpclient.execute(httppost);
//            try {
//                HttpEntity resEntity = response.getEntity();
//                if (resEntity != null) {
//                    res = EntityUtils.toString(resEntity, "UTF-8");
//                    System.out.println("Response: " + res); // 응답 출력
//                }
//            } finally {
//                response.close();
//            }
//        } catch (ClientProtocolException e) {
//            e.printStackTrace();
//        } catch (IOException e) {
//            e.printStackTrace();
//        } finally {
//            try {
//                httpclient.close();
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        }
//
//        return res;
        return "1234";
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

        String params = "{"
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
        return params;
    }

    private static int getRandom(int count) {
        return (int) Math.round(Math.random() * (count));
    }

    private static String charString = "abcdefghijklmnopqrstuvwxyz123456789";

    private static String getRandomString(int length) {
        StringBuffer sb = new StringBuffer();
        int len = charString.length();
        for (int i = 0; i < length; i++) {
            sb.append(charString.charAt(getRandom(len - 1)));
        }
        return sb.toString();
    }
}
