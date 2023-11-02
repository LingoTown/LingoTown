package com.lingotown.domain.talk.dto.response;

import java.util.List;

public class WordScoreResDto {
    private String word;
    private Long quality_score;
    private List<PhoneScoreResDto> phoneScoreList;
    private List<SyllableScoreResDto> syllableScoreList;
}
