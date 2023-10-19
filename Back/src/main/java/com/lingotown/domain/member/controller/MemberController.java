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
        Long memberId = Long.parseLong(principal.getName());
        MemberInfoResponseDto responseDto = memberService.getMemberInfo(memberId);
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), responseDto);
    }

    @DeleteMapping("/leave")
    public CommonResponse deleteMember(Principal principal) {
        Long memberId = Long.parseLong(principal.getName());

        memberService.leaveService(memberId);
        return new CommonResponse(ResponseStatus.DELETED_SUCCESS.getCode(), ResponseStatus.DELETED_SUCCESS.getMessage());
    }

    @PutMapping("/nickname")
    public CommonResponse putNickname(Principal principal, @RequestBody PutNicknameReqDto putNicknameReqDto) {
        Long memberId = Long.parseLong(principal.getName());

        memberService.editNickname(memberId, putNicknameReqDto);

        return new CommonResponse(ResponseStatus.UPDATED_SUCCESS.getCode(), ResponseStatus.UPDATED_SUCCESS.getMessage());
    }




}
