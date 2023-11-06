package com.lingotown.domain.talk.dto.response.speechace;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Data
public class PronunciationResDto {
    private String status;
    private Integer quotaRemaining;
//    private SpeechScoreResDto speechScore;
//    private List<ScoreIssueResDto> score_issue_list;
}
