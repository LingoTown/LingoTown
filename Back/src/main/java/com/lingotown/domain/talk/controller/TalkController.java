package com.lingotown.domain.talk.controller;

import com.lingotown.domain.talk.dto.request.TestDto;
import com.lingotown.domain.talk.service.MemberNPCService;
import com.lingotown.domain.talk.dto.response.*;
import com.lingotown.domain.talk.dto.request.IncreaseIntimacyReqDto;
import com.lingotown.domain.talk.dto.request.TalkReqDto;
import com.lingotown.domain.talk.entity.MemberNPC;
import com.lingotown.domain.talk.service.OpenAIService;
import com.lingotown.domain.talk.service.TalkService;
import com.lingotown.global.response.CommonResponse;
import com.lingotown.global.response.DataResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/talk")
public class TalkController {

    private final TalkService talkService;
    private final OpenAIService openAIService;
    private final MemberNPCService memberNPCService;


    @PostMapping("/start/{npcId}")
    public DataResponse<CreateTalkResDto> createNPCTalkList(Principal principal, @PathVariable("npcId") Long npcId){
        MemberNPC memberNPC = memberNPCService.createMemberNPCConnect(principal, npcId);
        return talkService.createTalk(memberNPC);
    }

    @PostMapping(value = "", consumes = {"multipart/form-data"})
    public DataResponse<CreateOpenAIResDto> askGPT(Principal principal, @ModelAttribute TalkReqDto talkReqDto) throws Exception {
        return openAIService.askGPT(principal, talkReqDto);
    }

    @GetMapping("/list/{memberNPCId}")
    public DataResponse<List<ReadTalkListResDto>> readTalkList(Principal principal, @PathVariable("memberNPCId") Long memberNPCId){
        return talkService.readTalkList(principal, memberNPCId);
    }

    @GetMapping("/list")
    public DataResponse<List<ReadMemberNPCResDto>> readMemberNPCList(Principal principal){
        return memberNPCService.readMemberNPCList(principal);
    }

    @GetMapping("/{talkId}")
    public DataResponse<List<ReadTalkDetailResDto>> readTalkDetailList(Principal principal, @PathVariable("talkId") Long talkId) {
        return talkService.readTalkDetail(principal,talkId);
    }

    @DeleteMapping("/{talkId}")
    public CommonResponse removeTalkList(Principal principal, @PathVariable("talkId") Long talkId) {
        return talkService.removeTalk(principal, talkId);
    }

    @PutMapping("/end")
    public CommonResponse increaseIntimacy(@RequestBody IncreaseIntimacyReqDto increaseIntimacyReqDto){
        return talkService.increaseIntimacy(increaseIntimacyReqDto);
    }


}
