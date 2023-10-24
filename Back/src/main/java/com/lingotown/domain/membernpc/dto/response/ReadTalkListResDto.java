package com.lingotown.domain.membernpc.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReadTalkListResDto {
    private Long talkId;
    private LocalDateTime talkDate;
}
