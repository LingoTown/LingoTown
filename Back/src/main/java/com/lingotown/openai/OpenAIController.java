package com.lingotown.openai;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/openai")
public class OpenAIController {

    private final OpenAIService openAIService;

    @PostMapping
    public String askGPT(@RequestBody TalkRequestDto requestDto) {
        return openAIService.askGPT(requestDto.getPrompt());
    }

}
