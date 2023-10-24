package com.lingotown.domain.member.controller;

import com.lingotown.domain.member.dto.request.EditNicknameReqDto;
import com.lingotown.domain.member.dto.response.MemberInfoResponseDto;
import com.lingotown.domain.member.service.MemberService;
import com.lingotown.global.response.CommonResponse;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/member")
public class MemberController {

    private final MemberService memberService;

    @GetMapping
    public DataResponse<MemberInfoResponseDto> readUserInfo(Principal principal) {
        return memberService.readMemberInfo(principal);
    }

    @DeleteMapping("/leave")
    public CommonResponse removeMember(Principal principal) {
       return memberService.removeMember(principal);
    }

    @PutMapping("/nickname")
    public CommonResponse editNickname(Principal principal, @RequestBody EditNicknameReqDto editNicknameReqDto) {
        return memberService.editNickname(principal, editNicknameReqDto);
    }

    @PutMapping(value = "/profile",  consumes = {"multipart/form-data"})
    public CommonResponse editProfile(Principal principal, @RequestPart(value = "profile") MultipartFile file) throws IOException {
        return memberService.editProfile(principal, file);
    }

}
