package com.lingotown.domain.member.controller;

import com.lingotown.domain.member.dto.response.MemberInfoResponseDto;
import com.lingotown.domain.member.service.MemberService;
import com.lingotown.global.response.DataResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/member")
public class MemberController {

    private final MemberService memberService;

    @GetMapping
    public DataResponse<MemberInfoResponseDto> getUserInfo(Principal principal) {
        Long userId = Long.parseLong(principal.getName());
        MemberInfoResponseDto responseDto = memberService.getMemberInfo(userId);
        return new DataResponse<>(200, "유저 정보 조회 성공", responseDto);
    }

}
