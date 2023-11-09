package com.lingotown.domain.talk.dto.response.speechsuper;

import lombok.Data;

@Data
public class SentencesScore {
    private String sentence;            //문장
    private WordDetailScore[] details;  //단어 점수 리스트
}
