package com.lingotown.domain.talk.controller;

import com.lingotown.domain.membernpc.dto.response.ReadTalkListResDto;
import com.lingotown.domain.talk.dto.request.CreateTalkDetailReqDto;
import com.lingotown.domain.talk.dto.request.IncreaseIntimacyReqDto;
import com.lingotown.domain.talk.dto.response.ReadTalkDetailResDto;
import com.lingotown.domain.talk.service.TalkService;
import com.lingotown.global.response.CommonResponse;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/talk")
public class TalkController {

    private final TalkService talkService;

    @PostMapping()
    public CommonResponse createTalkDetail(@RequestBody CreateTalkDetailReqDto createTalkDetailReqDto){
        return talkService.createTalkDetail(createTalkDetailReqDto);
    }

    @GetMapping("/list/{memberNPCId}")
    public DataResponse<List<ReadTalkListResDto>> readTalkList(@PathVariable("memberNPCId") Long memberNPCId){
        return talkService.readTalkList(memberNPCId);
    }

    @GetMapping("/{talkId}")
    public DataResponse<List<ReadTalkDetailResDto>> readTalkDetailList(@PathVariable("talkId") Long talkId) {
        return talkService.readTalkDetail(talkId);
    }

    @DeleteMapping("/{talkId}")
    public CommonResponse removeTalkList(@PathVariable("talkId") Long talkId) {
        return talkService.removeTalk(talkId);
    }

    @PutMapping("/end")
    public CommonResponse increaseIntimacy(@RequestBody IncreaseIntimacyReqDto increaseIntimacyReqDto){
        return talkService.increaseIntimacy(increaseIntimacyReqDto);
    }


}
