package com.lingotown.openai;

import com.lingotown.openai.dto.OpenAIResDto;
import com.lingotown.openai.dto.TalkReqDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/openai")
public class OpenAIController {

    private final OpenAIService openAIService;

    @PostMapping(value = "", consumes = {"multipart/form-data"})
    public OpenAIResDto askGPT(@RequestPart TalkReqDto talkReqDto, @RequestPart(value = "talkFile",  required = false) MultipartFile file) throws IOException {
        return openAIService.askGPT(talkReqDto, file);
    }

}
