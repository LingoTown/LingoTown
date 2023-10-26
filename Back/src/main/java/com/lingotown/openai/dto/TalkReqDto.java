package com.lingotown.openai.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@AllArgsConstructor
public class TalkReqDto {
    private Long talkId;
    private String prompt;
    private MultipartFile talkFile;
}
