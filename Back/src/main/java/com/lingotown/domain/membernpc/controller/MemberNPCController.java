package com.lingotown.domain.membernpc.controller;

import com.lingotown.domain.membernpc.dto.response.GetMemberNPCResDto;
import com.lingotown.domain.membernpc.dto.response.GetTalkListResDto;
import com.lingotown.domain.membernpc.service.MemberNPCService;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
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
@RequestMapping("/api/talk/list")
public class MemberNPCController {

    private final MemberNPCService memberNPCService;

    @GetMapping()
    public DataResponse<List<GetMemberNPCResDto>> getMemberNPCList(Principal principal){
        Long userId = Long.parseLong(principal.getName());

        List<GetMemberNPCResDto> memberNPCResDtoList = memberNPCService.getMemberNPCList(userId);
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), memberNPCResDtoList);
    }

    @GetMapping("/{memberNPCId}")
    public DataResponse<List<GetTalkListResDto>> getTalkList(@PathVariable("memberNPCId") Long memberNPCId){
        List<GetTalkListResDto> talkList = memberNPCService.getTalkList(memberNPCId);
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), talkList);
    }

}
