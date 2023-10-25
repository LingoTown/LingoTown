package com.lingotown.domain.member.controller;

import com.lingotown.domain.member.dto.request.SocialLoginRequestDto;
import com.lingotown.domain.member.dto.response.LoginResponseDto;
import com.lingotown.domain.member.service.SocialLoginService;
import com.lingotown.global.response.DataResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/login")
@RequiredArgsConstructor
public class LoginController {

    private final SocialLoginService socialLoginService;

    @PostMapping("/kakao")
    public DataResponse<LoginResponseDto> kakaoLogin(@RequestBody SocialLoginRequestDto requestDto) throws IOException {
        return socialLoginService.kakaoLogin(requestDto);
    }

    @PostMapping("/google")
    public DataResponse<LoginResponseDto> googleLogin(@RequestBody SocialLoginRequestDto requestDto) throws IOException {
        return socialLoginService.googleLogin(requestDto);
    }

}
