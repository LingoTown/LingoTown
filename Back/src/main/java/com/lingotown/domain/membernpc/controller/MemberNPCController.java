package com.lingotown.domain.membernpc.controller;

import com.lingotown.domain.membernpc.dto.request.CreateMemberNPCReqDto;
import com.lingotown.domain.membernpc.dto.response.ReadMemberNPCResDto;
import com.lingotown.domain.membernpc.dto.response.CreateTalkResDto;
import com.lingotown.domain.membernpc.entity.MemberNPC;
import com.lingotown.domain.membernpc.service.MemberNPCService;
import com.lingotown.domain.talk.service.TalkService;
import com.lingotown.global.response.DataResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/talk")
public class MemberNPCController {

    private final MemberNPCService memberNPCService;
    private final TalkService talkService;

    @GetMapping("/list")
    public DataResponse<List<ReadMemberNPCResDto>> readMemberNPCList(Principal principal){
        return memberNPCService.readMemberNPCList(principal);
    }

    @PostMapping("/start")
    public DataResponse<CreateTalkResDto> createNPCTalkList(Principal principal, @RequestBody CreateMemberNPCReqDto createMemberNPCReqDto){
        MemberNPC memberNPC = memberNPCService.createMemberNPCConnect(principal, createMemberNPCReqDto);
        return talkService.createTalk(memberNPC);
    }


}
