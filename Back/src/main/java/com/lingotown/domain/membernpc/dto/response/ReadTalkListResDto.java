package com.lingotown.domain.membernpc.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class ReadTalkListResDto {
    Long talkId;
    LocalDateTime talkDate;
}
