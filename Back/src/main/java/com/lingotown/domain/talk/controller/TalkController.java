package com.lingotown.domain.talk.controller;

import com.lingotown.domain.membernpc.dto.response.ReadTalkListResDto;
import com.lingotown.domain.talk.dto.request.CreateTalkDetailReqDto;
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
        talkService.createTalkDetail(createTalkDetailReqDto);
        return new CommonResponse(ResponseStatus.CREATED_SUCCESS.getCode(), ResponseStatus.CREATED_SUCCESS.getMessage());
    }

    @GetMapping("/list/{memberNPCId}")
    public DataResponse<List<ReadTalkListResDto>> readTalkList(@PathVariable("memberNPCId") Long memberNPCId){
        List<ReadTalkListResDto> talkList = talkService.readTalkList(memberNPCId);
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), talkList);
    }


    @GetMapping("/{talkId}")
    public DataResponse<List<ReadTalkDetailResDto>> readTalkDetailList(@PathVariable("talkId") Long talkId) {
        List<ReadTalkDetailResDto> talkDetailResDtoList = talkService.readTalkDetail(talkId);
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), talkDetailResDtoList);
    }


    @DeleteMapping("/{talkId}")
    public CommonResponse removeTalkList(@PathVariable("talkId") Long talkId) {
        talkService.removeTalk(talkId);
        return new CommonResponse(ResponseStatus.DELETED_SUCCESS.getCode(), ResponseStatus.DELETED_SUCCESS.getMessage());
    }




}
