package com.lingotown.domain.member.service;


import com.lingotown.domain.character.entity.Character;
import com.lingotown.domain.character.repository.CharacterRepository;
import com.lingotown.domain.member.dto.request.SocialLoginRequestDto;
import com.lingotown.domain.member.dto.response.CharacterLockResponseDto;
import com.lingotown.domain.member.dto.response.LoginResponseDto;
import com.lingotown.domain.member.entity.Member;
import com.lingotown.domain.member.entity.MemberCharacter;
import com.lingotown.domain.member.repository.MemberCharacterRepository;
import com.lingotown.domain.member.repository.MemberRepository;

import com.lingotown.global.data.GenderType;
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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Transactional
public class SocialLoginService {

    private final static String CONTENT_TYPE = "Content-type";
    private final static String CONTENT_TYPE_DETAIL = "application/x-www-form-urlencoded;charset=utf-8";
    private final static String EMAIL = "email";
    private final static String LOGIN_ID = "loginId";
    private final static String NICKNAME = "nickname";

    private final MemberRepository memberRepository;
    private final MemberCharacterRepository memberCharacterRepository;
    private final CharacterRepository characterRepository;

    private final MemberService memberService;
    private final MemberCharacterService memberCharacterService;

    @Value("${social-login.kakao.client}")
    private String kakaoClient;

    @Value("${social-login.kakao.secret}")
    private String kakaoSecret;

    @Value("${social-login.kakao.auth-uri}")
    private String kakaoAuthUri;

    @Value("${social-login.kakao.user-info-uri}")
    private String kakaoUserInfoUri;

    @Value("${social-login.google.client}")
    private String googleClient;

    @Value("${social-login.google.secret}")
    private String googleSecret;

    @Value("${social-login.google.auth-uri}")
    private String googleAuthUri;

    @Value("${social-login.google.user-info-uri}")
    private String googleUserInfoUri;

    @Value("${s3url}")
    private String s3Url;


    public DataResponse<LoginResponseDto> kakaoLogin(SocialLoginRequestDto requestDto) throws IOException {
        String accessToken = getAccessTokenByKakao(requestDto);
        Map<String, Object> userInfo = getUserInfoByKakao(accessToken);
        LoginResponseDto responseDto = getLoginResponseDto(userInfo, LoginType.KAKAO);
        return new DataResponse<>(200, "로그인 성공", responseDto);
    }

    public DataResponse<LoginResponseDto> googleLogin(SocialLoginRequestDto requestDto) throws IOException {
        String accessToken = getAccessTokenByGoogle(requestDto);
        Map<String, Object> userInfo = getUserInfoByGoogle(accessToken);
        LoginResponseDto responseDto = getLoginResponseDto(userInfo, LoginType.GOOGLE);
        return new DataResponse<>(200, "로그인 성공", responseDto);
    }

    public String getAccessTokenByKakao(SocialLoginRequestDto requestDto) throws JsonProcessingException {
        HttpEntity<MultiValueMap<String, String>> tokenRequest = getHttpEntityByKakao(requestDto);
        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> response = rt.exchange(kakaoAuthUri, HttpMethod.POST, tokenRequest, String.class);

        String responseBody = response.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(responseBody);

        return jsonNode.get("access_token").asText();
    }

    private HttpEntity<MultiValueMap<String, String>> getHttpEntityByKakao(SocialLoginRequestDto requestDto) {
        HttpHeaders headers = new HttpHeaders();
        headers.add(CONTENT_TYPE, CONTENT_TYPE_DETAIL);

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", "authorization_code");
        body.add("client_id", kakaoClient);
        body.add("client_secret", kakaoSecret);
        body.add("redirect_uri", requestDto.getRedirect());
        body.add("code", requestDto.getCode());

        return new HttpEntity<>(body, headers);
    }


    public String getAccessTokenByGoogle(SocialLoginRequestDto requestDto) throws JsonProcessingException {
        HttpEntity<MultiValueMap<String, String>> tokenRequest = getHttpEntityByGoogle(requestDto);
        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> response = rt.exchange(googleAuthUri, HttpMethod.POST, tokenRequest, String.class);

        String responseBody = response.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(responseBody);

        return jsonNode.get("access_token").asText();
    }

    private HttpEntity<MultiValueMap<String, String>> getHttpEntityByGoogle(SocialLoginRequestDto requestDto) {
        HttpHeaders headers = new HttpHeaders();
        headers.add(CONTENT_TYPE, CONTENT_TYPE_DETAIL);

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", "authorization_code");
        body.add("client_id", googleClient);
        body.add("client_secret", googleSecret);
        body.add("redirect_uri", requestDto.getRedirect());
        body.add("code", requestDto.getCode());

        return new HttpEntity<>(body, headers);
    }

    public Map<String, Object> getUserInfoByKakao(String accessToken) throws IOException {

        Map<String, Object> userInfo = new HashMap<>();

        StringBuilder result = getStringBuilder(accessToken, kakaoUserInfoUri);
        JsonElement element = JsonParser.parseString(result.toString());

        String email = "이메일 동의시 계정 정보가 표기됩니다.";
        boolean hasEmail = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("email_needs_agreement").getAsBoolean();
        if (!hasEmail) {
            email = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get(EMAIL).getAsString();
        }

        userInfo.put(LOGIN_ID, element.getAsJsonObject().get("id").getAsString());
        userInfo.put(NICKNAME, element.getAsJsonObject().get("properties").getAsJsonObject().get(NICKNAME).getAsString());
        userInfo.put("profileImg", element.getAsJsonObject().get("properties").getAsJsonObject().get("profile_image").getAsString());
        userInfo.put(EMAIL, email);

        return userInfo;
    }

    public Map<String, Object> getUserInfoByGoogle(String accessToken) throws IOException {
        Map<String, Object> userInfo = new HashMap<>();

        StringBuilder result = getStringBuilder(accessToken, googleUserInfoUri);
        JsonElement element = JsonParser.parseString(result.toString());

        userInfo.put(LOGIN_ID, element.getAsJsonObject().get("id").getAsString());
        userInfo.put(NICKNAME, element.getAsJsonObject().get("name").getAsString());
        userInfo.put("profileImg", element.getAsJsonObject().get("picture").getAsString());
        userInfo.put(EMAIL, element.getAsJsonObject().get(EMAIL).getAsString());
        return userInfo;
    }

    private StringBuilder getStringBuilder(String accessToken, String reqUrl) throws IOException {
        URL url = new URL(reqUrl);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();

        conn.setRequestMethod("GET");
        conn.setDoOutput(true);
        conn.setRequestProperty("Authorization", "Bearer " + accessToken);
        conn.setRequestProperty(CONTENT_TYPE, CONTENT_TYPE_DETAIL);

        BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        String line;
        StringBuilder result = new StringBuilder();
        while ((line = br.readLine()) != null) {
            result.append(line);
        }
        return result;
    }

    private LoginResponseDto getLoginResponseDto(Map<String, Object> userInfo, LoginType loginType) {

        if (memberService.isEmpty(userInfo.get(LOGIN_ID).toString(), loginType)) {
            memberService.enterMember(userInfo, loginType);
        }

        Member member = memberRepository.findByLoginIdAndLoginTypeWhereDeleteAtIsNull(userInfo.get(LOGIN_ID).toString(), loginType)
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_NOT_FOUND));

        String accessToken = JwtUtil.generateAccessToken(member.getId().toString());
        String refreshToken = JwtUtil.generateRefreshToken(member.getId().toString());

        List<MemberCharacter> memberCharacterList = memberCharacterRepository.findSelectedCharacterByMemberId(member.getId());

        if(memberCharacterList.size() > 1) {
            for (int i=0; i<memberCharacterList.size(); i++) {
                if(i == 0)
                    continue;

                memberCharacterList.get(i).selectOff();
            }
        }

        Long characterId = null;
        GenderType characterGender = null;
        String characterLink = null;
        String characterImage = null;


        if(memberCharacterList.isEmpty()) {
            characterId = 1L;
            characterGender = GenderType.MAN;
            characterLink = s3Url + "Player/m_1.glb";
            characterImage = s3Url + "Player/2D/m1Img.png";
        }
        else {
            characterId = memberCharacterList.get(0).getCharacter().getId();
            characterGender = memberCharacterList.get(0).getCharacter().getGender();
            characterLink = memberCharacterList.get(0).getCharacter().getLink();
            characterImage = memberCharacterList.get(0).getCharacter().getImage();
        }

        List<MemberCharacter> memberCharacterListByMemberId = memberCharacterRepository.findByMemberId(member.getId());
        List<Character> characterList = characterRepository.findAll();

        if(memberCharacterListByMemberId.isEmpty() || memberCharacterListByMemberId.size() != characterList.size()) {
            memberCharacterService.createMemberCharacter(member);
            memberCharacterListByMemberId = memberCharacterRepository.findByMemberId(member.getId());
        }

        List<CharacterLockResponseDto> lockDtoList = new ArrayList<>();

        for (MemberCharacter memberCharacter : memberCharacterListByMemberId) {
            CharacterLockResponseDto characterLockResponseDto = CharacterLockResponseDto.builder()
                    .characterId(memberCharacter.getCharacter().getId())
                    .islocked(memberCharacter.isLocked())
                    .build();

            lockDtoList.add(characterLockResponseDto);
        }

        return LoginResponseDto.builder()
                    .accessToken(accessToken)
                    .refreshToken(refreshToken)
                    .email(member.getEmail())
                    .gender(member.getGenderType().toString())
                    .social(member.getLoginType().toString())
                    .nickname(member.getNickname())
                    .profileImg(member.getProfile())
                    .createdAt(member.getCreatedAt())
                    .characterId(characterId)
                    .characterGender(characterGender)
                    .characterLink(characterLink)
                    .characterImage(characterImage)
                    .lockList(lockDtoList)
                    .build();
    }


}