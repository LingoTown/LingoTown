package com.lingotown.domain.member.controller;

import com.lingotown.domain.member.dto.request.EditNicknameReqDto;
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
    public DataResponse<MemberInfoResponseDto> readUserInfo(Principal principal) {
        MemberInfoResponseDto responseDto = memberService.readMemberInfo(principal);
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), responseDto);
    }

    @DeleteMapping("/leave")
    public CommonResponse removeMember(Principal principal) {
        memberService.removeMember(principal);
        return new CommonResponse(ResponseStatus.DELETED_SUCCESS.getCode(), ResponseStatus.DELETED_SUCCESS.getMessage());
    }

    @PutMapping("/nickname")
    public CommonResponse editNickname(Principal principal, @RequestBody EditNicknameReqDto editNicknameReqDto) {
        memberService.editNickname(principal, editNicknameReqDto);
        return new CommonResponse(ResponseStatus.UPDATED_SUCCESS.getCode(), ResponseStatus.UPDATED_SUCCESS.getMessage());
    }




}
