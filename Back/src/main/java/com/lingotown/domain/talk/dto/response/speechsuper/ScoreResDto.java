package com.lingotown.domain.talk.dto.response.speechsuper;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ScoreResDto {
    private int pronunciation;  //결측단어/일반단어 구분
    private int overall;        //전체 점수
    private int prominence;     //강조
}
