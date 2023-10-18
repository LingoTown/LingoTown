package com.lingotown.domain.member.controller;

import com.lingotown.domain.member.dto.request.PutNicknameReqDto;
import com.lingotown.domain.member.dto.response.MemberInfoResponseDto;
import com.lingotown.domain.member.service.MemberService;
import com.lingotown.global.response.CommonResponse;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), responseDto);
    }

    @DeleteMapping("/leave")
    public CommonResponse deleteMember(Principal principal) {
        Long userId = Long.parseLong(principal.getName());

        memberService.leaveService(userId);
        return new CommonResponse(ResponseStatus.CREATED_SUCCESS.getCode(), ResponseStatus.CREATED_SUCCESS.getMessage());
    }

    @PutMapping("/nickname")
    public CommonResponse putNickname(Principal principal, PutNicknameReqDto putNicknameReqDto) {
        Long userId = Long.parseLong(principal.getName());

        memberService.editNickname(userId, putNicknameReqDto);

        return new CommonResponse(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage());
    }




}
