package com.lingotown.domain.talk.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReadPronunciationScoreResDto {
    private int overallScore;
    private int pronunciationScore;
    private int fluencyScore;
    private int integrityScore;
    private int rhythmScore;
    private List<ReadWordScoreResDto> wordScoreList;

}
