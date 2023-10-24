package com.lingotown.openai;

import com.lingotown.openai.dto.OpenAIResDto;
import com.lingotown.openai.dto.TalkReqDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/openai")
public class OpenAIController {

    private final OpenAIService openAIService;

    @PostMapping
    public OpenAIResDto askGPT(@RequestBody TalkReqDto talkReqDto) {
        return openAIService.askGPT(talkReqDto);
    }

}
