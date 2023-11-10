package com.lingotown.domain.talk.dto.response.speechsuper;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class WordResDto {
    private int readType;
    private ScoreResDto scores;
    private String word;
}
