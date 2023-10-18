package com.lingotown.domain.membernpc.controller;

import com.lingotown.domain.membernpc.dto.response.GetMemberNPCResDto;
import com.lingotown.domain.membernpc.dto.response.GetTalkListResDto;
import com.lingotown.domain.membernpc.service.MemberNPCService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/talk")
public class MemberNPCController {

    private final MemberNPCService memberNPCService;

    @GetMapping("/list")
    public List<GetMemberNPCResDto> getMemberNPCResDtoList(Principal principal){
        Long userId = Long.parseLong(principal.getName());

        List<GetMemberNPCResDto> memberNPCList = memberNPCService.getMemberNPCList(userId);
        return memberNPCList;
    }

    @GetMapping("/list/{memberNPCId}")
    public List<GetTalkListResDto> getTalkList(@PathVariable("memberNPCId") Long memberNPCId){
        List<GetTalkListResDto> talkList = memberNPCService.getTalkList(memberNPCId);
        return talkList;
    }




}
