package com.lingotown.domain.talk.dto.response.speechsuper;

import lombok.Data;

@Data
public class WordDetailScore {
    private String word;        //단어
    private Long overall;       //점수
    private Long prominence;    //강조 여부
}
