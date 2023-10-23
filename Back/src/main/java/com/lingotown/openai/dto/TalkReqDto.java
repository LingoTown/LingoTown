package com.lingotown.openai.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
public class TalkReqDto {
    private Long talkId;
    private String prompt;
    private String talkFile;
}
