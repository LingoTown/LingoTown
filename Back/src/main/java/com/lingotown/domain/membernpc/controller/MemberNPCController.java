package com.lingotown.domain.membernpc.controller;

import com.lingotown.domain.member.service.MemberService;
import com.lingotown.domain.membernpc.dto.request.PostMemberNPCReqDto;
import com.lingotown.domain.membernpc.dto.response.GetMemberNPCResDto;
import com.lingotown.domain.membernpc.dto.response.GetTalkListResDto;
import com.lingotown.domain.membernpc.service.MemberNPCService;
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

    @GetMapping("/list")
    public DataResponse<List<GetMemberNPCResDto>> getMemberNPCList(Principal principal){
        List<GetMemberNPCResDto> memberNPCResDtoList = memberNPCService.getMemberNPCList(principal);
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), memberNPCResDtoList);
    }

    @PostMapping("/start")
    public CommonResponse postNPCTalkList(Principal principal, @RequestBody PostMemberNPCReqDto postMemberNPCReqDto){
        memberNPCService.postNPCTalkList(principal, postMemberNPCReqDto);
        return new CommonResponse(ResponseStatus.CREATED_SUCCESS.getCode(), ResponseStatus.CREATED_SUCCESS.getMessage());
    }


}
