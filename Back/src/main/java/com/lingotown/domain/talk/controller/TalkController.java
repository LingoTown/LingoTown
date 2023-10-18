package com.lingotown.domain.talk.controller;

import com.lingotown.domain.membernpc.dto.response.GetTalkListResDto;
import com.lingotown.domain.talk.dto.response.GetTalkDetailResDto;
import com.lingotown.domain.talk.repository.TalkRepository;
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


    @GetMapping("/list/{memberNPCId}")
    public DataResponse<List<GetTalkListResDto>> getTalkList(@PathVariable("memberNPCId") Long memberNPCId){
        List<GetTalkListResDto> talkList = talkService.getTalkList(memberNPCId);
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), talkList);
    }


    @GetMapping("/{talkId}")
    public DataResponse<List<GetTalkDetailResDto>> getTalkDetailList(@PathVariable("talkId") Long talkId) {
        List<GetTalkDetailResDto> talkDetailResDtoList = talkService.getTalkDetail(talkId);
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), talkDetailResDtoList);
    }


    @DeleteMapping("/{talkId}")
    public CommonResponse deleteTalkList(@PathVariable("talkId") Long talkId) {
        talkService.deleteTalk(talkId);
        return new CommonResponse(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.CREATED_SUCCESS.getMessage());
    }




}
