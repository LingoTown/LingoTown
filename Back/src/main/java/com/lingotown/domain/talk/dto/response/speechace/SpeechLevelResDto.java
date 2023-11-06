package com.lingotown.domain.talk.dto.response.speechace;

import lombok.Data;
import lombok.Getter;

@Data
public class SpeechLevelResDto {
    private long score;
    private String level;
    private String message;
}
