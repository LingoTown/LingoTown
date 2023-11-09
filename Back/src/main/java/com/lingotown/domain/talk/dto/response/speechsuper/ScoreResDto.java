package com.lingotown.domain.talk.dto.response.speechsuper;

import lombok.*;

@Data
public class ScoreResDto {
    private int pronunciation;  //결측단어/일반단어 구분
    private int overall;        //전체 점수
    private int prominence;     //강조
}
