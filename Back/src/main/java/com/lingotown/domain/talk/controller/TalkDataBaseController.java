package com.lingotown.domain.talk.controller;

import com.lingotown.domain.talk.dto.request.TalkReqDto;
import com.lingotown.domain.talk.dto.response.CreateOpenAIResDto;
import com.lingotown.domain.talk.service.OpenAIService;
import com.lingotown.global.response.DataResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/talk")
public class TalkDataBaseController {

    private final OpenAIService openAIService;

    @PostMapping(value = "/database", consumes = {"multipart/form-data"})
    public DataResponse<CreateOpenAIResDto> askGPTDataBase(Principal principal, @ModelAttribute TalkReqDto talkReqDto) throws Exception {
        return openAIService.askDataBase(principal, talkReqDto);
    }

}
