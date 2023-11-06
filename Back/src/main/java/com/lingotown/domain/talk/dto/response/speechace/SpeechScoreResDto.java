package com.lingotown.domain.talk.dto.response.speechace;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Data
public class SpeechScoreResDto {
    private String transcript;
    private List<WordScoreResDto> wordScoreList;
    private SpeechTestScoreResDto ielts_score;
    private SpeechTestScoreResDto pte_score;
    private SpeechTestScoreResDto cefr_score;
    //private Grammar[] grammar;
    private Vocab vocab;
    private Coherence coherence;
}
