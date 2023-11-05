package com.lingotown.domain.talk.dto.response.speechace;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class SpeechTestScoreResDto {
    private Long pronunciation;
    private Long fluency;
    private Long grammar;
    private Long coherence;
    private Long vocab;
    private Long overall;
}
