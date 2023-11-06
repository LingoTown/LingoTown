package com.lingotown.domain.talk.dto.response.speechace;

import lombok.Data;

@Data
public class ScoreIssueResDto {
    private String source;
    private String status;
    private String short_message;
    private String detail_message;
}
