package com.lingotown.domain.membernpc.controller;

import com.lingotown.domain.membernpc.dto.request.CreateMemberNPCReqDto;
import com.lingotown.domain.membernpc.dto.response.ReadMemberNPCResDto;
import com.lingotown.domain.membernpc.dto.response.CreateTalkResDto;
import com.lingotown.domain.membernpc.entity.MemberNPC;
import com.lingotown.domain.membernpc.service.MemberNPCService;
import com.lingotown.domain.talk.service.TalkService;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
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
        List<ReadMemberNPCResDto> memberNPCResDtoList = memberNPCService.readMemberNPCList(principal);
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), memberNPCResDtoList);
    }

    @PostMapping("/start")
    public DataResponse<CreateTalkResDto> createNPCTalkList(Principal principal, @RequestBody CreateMemberNPCReqDto createMemberNPCReqDto){
        MemberNPC memberNPC = memberNPCService.createMemberNPCConnect(principal, createMemberNPCReqDto);
        CreateTalkResDto createTalkResDto = talkService.createTalk(memberNPC);

        return new DataResponse(ResponseStatus.CREATED_SUCCESS.getCode(),
                ResponseStatus.CREATED_SUCCESS.getMessage(), createTalkResDto);
    }

}
