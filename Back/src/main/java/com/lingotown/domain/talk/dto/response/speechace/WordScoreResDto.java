package com.lingotown.domain.talk.dto.response.speechace;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class WordScoreResDto {
    private String word;
    private Long quality_score;
}
