package com.lingotown.domain.membernpc.controller;

import com.lingotown.domain.member.service.MemberService;
import com.lingotown.domain.membernpc.dto.request.PostMemberNPCReqDto;
import com.lingotown.domain.membernpc.dto.response.GetMemberNPCResDto;
import com.lingotown.domain.membernpc.dto.response.GetTalkListResDto;
import com.lingotown.domain.membernpc.dto.response.PostTalkList;
import com.lingotown.domain.membernpc.entity.MemberNPC;
import com.lingotown.domain.membernpc.service.MemberNPCService;
import com.lingotown.domain.talk.service.TalkService;
import com.lingotown.global.response.CommonResponse;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import lombok.Getter;
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
    public DataResponse<List<GetMemberNPCResDto>> getMemberNPCList(Principal principal){
        List<GetMemberNPCResDto> memberNPCResDtoList = memberNPCService.getMemberNPCList(principal);
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), memberNPCResDtoList);
    }

    @PostMapping("/start")
    public DataResponse<PostTalkList> postNPCTalkList(Principal principal, @RequestBody PostMemberNPCReqDto postMemberNPCReqDto){
        MemberNPC memberNPC = memberNPCService.postMemberNPCConnect(principal, postMemberNPCReqDto);
        Long talkId = talkService.postTalkList(memberNPC);

        PostTalkList postTalkList = new PostTalkList(talkId);
        return new DataResponse(ResponseStatus.CREATED_SUCCESS.getCode(),
                ResponseStatus.CREATED_SUCCESS.getMessage(), postTalkList);
    }

}
