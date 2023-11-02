package com.lingotown.domain.talk.dto.response;

public class TextScoreResDto {
    private String text;
    private Long quality_score;

    private WordScoreResDto wordScoreResDto;
    private String fidelity_class;
}
