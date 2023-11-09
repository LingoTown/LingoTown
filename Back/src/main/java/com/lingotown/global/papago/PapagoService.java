package com.lingotown.global.papago;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.lingotown.global.response.DataResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@Service
public class PapagoService {

    @Value("${PAPAGO.CLIENT}")
    private String CLIENT;

    @Value("${PAPAGO.SECRET}")
    private String SECRET;

    @Value("${PAPAGO.URL}")
    private String API_URL;

    public DataResponse<String> translate(PapagoRequestDto requestDto) throws JsonProcessingException {

        Map<String, String> requestHeaders = new HashMap<>();
        requestHeaders.put("X-Naver-Client-Id", CLIENT);
        requestHeaders.put("X-Naver-Client-Secret", SECRET);

        String responseBody = post(requestHeaders, API_URL, requestDto);
        JsonObject jsonObj = JsonParser.parseString(responseBody).getAsJsonObject();
        JsonObject messageObj = jsonObj.getAsJsonObject("message");
        JsonObject resultObj = messageObj.getAsJsonObject("result");
        String result = resultObj.get("translatedText").getAsString();

        return new DataResponse<>(200, "번역 성공", result);
    }

    private static String post(Map<String, String> requestHeaders, String apiUrl, PapagoRequestDto requestDto){

        String text = URLEncoder.encode(requestDto.getSentence(), StandardCharsets.UTF_8);
        HttpURLConnection con = connect(apiUrl);
        String postParams = "source=" + requestDto.getBefore() + "&target="+ requestDto.getAfter() + "&text=" + text;
        try {
            con.setRequestMethod("POST");
            for(Map.Entry<String, String> header :requestHeaders.entrySet()) {
                con.setRequestProperty(header.getKey(), header.getValue());
            }

            con.setDoOutput(true);
            try (DataOutputStream wr = new DataOutputStream(con.getOutputStream())) {
                wr.write(postParams.getBytes());
                wr.flush();
            }

            int responseCode = con.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                return readBody(con.getInputStream());
            } else {
                return readBody(con.getErrorStream());
            }
        } catch (IOException e) {
            throw new RuntimeException("API 요청과 응답 실패", e);
        } finally {
            con.disconnect();
        }
    }

    private static HttpURLConnection connect(String apiUrl){
        try {
            URL url = new URL(apiUrl);
            return (HttpURLConnection)url.openConnection();
        } catch (MalformedURLException e) {
            throw new RuntimeException("API URL이 잘못되었습니다. : " + apiUrl, e);
        } catch (IOException e) {
            throw new RuntimeException("연결이 실패했습니다. : " + apiUrl, e);
        }
    }

    private static String readBody(InputStream body){
        InputStreamReader streamReader = new InputStreamReader(body);

        try (BufferedReader lineReader = new BufferedReader(streamReader)) {
            StringBuilder responseBody = new StringBuilder();

            String line;
            while ((line = lineReader.readLine()) != null) {
                responseBody.append(line);
            }

            return responseBody.toString();
        } catch (IOException e) {
            throw new RuntimeException("API 응답을 읽는데 실패했습니다.", e);
        }
    }
}
