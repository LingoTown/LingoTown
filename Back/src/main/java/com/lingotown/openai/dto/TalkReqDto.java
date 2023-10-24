package com.lingotown.openai.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@AllArgsConstructor
public class TalkReqDto {
    private Long talkId;
    private String prompt;
    private String talkFile;
}
