package com.lingotown.domain.member.service;


import com.lingotown.domain.member.dto.request.SocialLoginRequestDto;
import com.lingotown.domain.member.dto.response.LoginResponseDto;
import com.lingotown.domain.member.entity.Member;
import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.global.data.LoginType;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.util.JwtUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;

@Service
@RequiredArgsConstructor
@Transactional
public class SocialLoginService {

    private final MemberRepository memberRepository;
    private final MemberService memberService;

    @Value("${social-login.kakao.client}")
    private String KAKAO_CLIENT;

    @Value("${social-login.kakao.secret}")
    private String KAKAO_SECRET;

    @Value("${social-login.kakao.auth-uri}")
    private String KAKAO_AUTH_URI;

    @Value("${social-login.kakao.user-info-uri}")
    private String KAKAO_USER_INFO_URI;

    @Value("${social-login.google.client}")
    private String GOOGLE_CLIENT;

    @Value("${social-login.google.secret}")
    private String GOOGLE_SECRET;

    @Value("${social-login.google.auth-uri}")
    private String GOOGLE_AUTH_URI;

    @Value("${social-login.google.user-info-uri}")
    private String GOOGLE_USER_INFO_URI;


    public DataResponse<LoginResponseDto> kakaoLogin(SocialLoginRequestDto requestDto) throws IOException {
        String accessToken = getAccessTokenByKakao(requestDto);
        HashMap<String, Object> userInfo = getUserInfoByKakao(accessToken);
        LoginResponseDto responseDto = getLoginResponseDto(userInfo, LoginType.KAKAO);
        return new DataResponse<>(200, "로그인 성공", responseDto);
    }

    public DataResponse<LoginResponseDto> googleLogin(SocialLoginRequestDto requestDto) throws IOException {
        String accessToken = getAccessTokenByGoogle(requestDto);
        HashMap<String, Object> userInfo = getUserInfoByGoogle(accessToken);
        LoginResponseDto responseDto = getLoginResponseDto(userInfo, LoginType.GOOGLE);
        return new DataResponse<>(200, "로그인 성공", responseDto);
    }

    public String getAccessTokenByKakao(SocialLoginRequestDto requestDto) throws JsonProcessingException {
        HttpEntity<MultiValueMap<String, String>> tokenRequest = getHttpEntityByKakao(requestDto);
        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> response = rt.exchange(KAKAO_AUTH_URI, HttpMethod.POST, tokenRequest, String.class);

        String responseBody = response.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(responseBody);

        return jsonNode.get("access_token").asText();
    }

    private HttpEntity<MultiValueMap<String, String>> getHttpEntityByKakao(SocialLoginRequestDto requestDto) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", "authorization_code");
        body.add("client_id", KAKAO_CLIENT);
        body.add("client_secret", KAKAO_SECRET);
        body.add("redirect_uri", requestDto.getRedirect());
        body.add("code", requestDto.getCode());

        return new HttpEntity<>(body, headers);
    }


    public String getAccessTokenByGoogle(SocialLoginRequestDto requestDto) throws JsonProcessingException {
        HttpEntity<MultiValueMap<String, String>> tokenRequest = getHttpEntityByGoogle(requestDto);
        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> response = rt.exchange(GOOGLE_AUTH_URI, HttpMethod.POST, tokenRequest, String.class);

        String responseBody = response.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(responseBody);

        return jsonNode.get("access_token").asText();
    }

    private HttpEntity<MultiValueMap<String, String>> getHttpEntityByGoogle(SocialLoginRequestDto requestDto) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", "authorization_code");
        body.add("client_id", GOOGLE_CLIENT);
        body.add("client_secret", GOOGLE_SECRET);
        body.add("redirect_uri", requestDto.getRedirect());
        body.add("code", requestDto.getCode());

        return new HttpEntity<>(body, headers);
    }

    public HashMap<String, Object> getUserInfoByKakao(String accessToken) throws IOException {

        HashMap<String, Object> userInfo = new HashMap<>();

        StringBuilder result = getStringBuilder(accessToken, KAKAO_USER_INFO_URI);
        JsonElement element = JsonParser.parseString(result.toString());

        String email = "";
        boolean has_email = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("has_email").getAsBoolean();
        if (has_email) {
            email = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("email").getAsString();
        }

        userInfo.put("loginId", element.getAsJsonObject().get("id").getAsString());
        userInfo.put("nickname", element.getAsJsonObject().get("properties").getAsJsonObject().get("nickname").getAsString());
        userInfo.put("profileImg", element.getAsJsonObject().get("properties").getAsJsonObject().get("profile_image").getAsString());
        userInfo.put("email", email);

        return userInfo;
    }

    public HashMap<String, Object> getUserInfoByGoogle(String accessToken) throws IOException {
        HashMap<String, Object> userInfo = new HashMap<>();

        StringBuilder result = getStringBuilder(accessToken, GOOGLE_USER_INFO_URI);
        JsonElement element = JsonParser.parseString(result.toString());

        userInfo.put("loginId", element.getAsJsonObject().get("id").getAsString());
        userInfo.put("nickname", element.getAsJsonObject().get("name").getAsString());
        userInfo.put("profileImg", element.getAsJsonObject().get("picture").getAsString());
        userInfo.put("email", element.getAsJsonObject().get("email").getAsString());
        return userInfo;
    }

    private StringBuilder getStringBuilder(String accessToken, String reqUrl) throws IOException {
        URL url = new URL(reqUrl);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();

        conn.setRequestMethod("GET");
        conn.setDoOutput(true);
        conn.setRequestProperty("Authorization", "Bearer " + accessToken);
        conn.setRequestProperty("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        String line;
        StringBuilder result = new StringBuilder();
        while ((line = br.readLine()) != null) {
            result.append(line);
        }
        return result;
    }

    private LoginResponseDto getLoginResponseDto(HashMap<String, Object> userInfo, LoginType loginType) {

        if (memberService.isEmpty(userInfo.get("loginId").toString(), loginType)) {
            Member user = memberService.enterMember(userInfo, loginType);
        }

        Member member = memberRepository.findByLoginIdAndLoginType(userInfo.get("loginId").toString(), loginType)
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_NOT_FOUND));

        String accessToken = JwtUtil.generateAccessToken(member.getId().toString());
        String refreshToken = JwtUtil.generateRefreshToken(member.getId().toString());
        return LoginResponseDto.of(member, accessToken, refreshToken);
    }


}