package com.lingotown.domain.talk.controller;

import com.lingotown.domain.membernpc.dto.response.ReadTalkListResDto;
import com.lingotown.domain.talk.dto.request.IncreaseIntimacyReqDto;
import com.lingotown.domain.talk.dto.response.ReadTalkDetailResDto;
import com.lingotown.domain.talk.service.TalkService;
import com.lingotown.global.response.CommonResponse;
import com.lingotown.global.response.DataResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/talk")
public class TalkController {

    private final TalkService talkService;


    @GetMapping("/list/{memberNPCId}")
    public DataResponse<List<ReadTalkListResDto>> readTalkList(Principal principal, @PathVariable("memberNPCId") Long memberNPCId){
        return talkService.readTalkList(principal, memberNPCId);
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
