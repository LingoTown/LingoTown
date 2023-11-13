package com.lingotown.domain.talk.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReadTalkDetailInfoResDto {
    private LocalDateTime createAt;
    private ReadTalkDetailResDto talkDetailList;
    private ReadPronunciationScoreResDto pronunciationScoreList;
}
