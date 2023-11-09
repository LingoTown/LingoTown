package com.lingotown.domain.talk.dto.response.speechsuper;

import lombok.*;

@Data
public class WordResDto {
    private int readType;
    private ScoreResDto scores;
    private String word;
}
