package com.lingotown.domain.talk.dto.response.speechsuper;

import lombok.Data;

@Data
public class ResultScore {
    private Long integrity;                     //완성도 점수
    private SentencesScore[] sentencesScore;    //문장 점수
    private Long pronunciation;                 //발음 점수
    private Long fluency;                       //유창성 점수
    private Long rhythm;                        //어조 및 강세 점수
    private Long overall;                       //점수
}
