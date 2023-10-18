package com.lingotown.domain.talk.talk.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class GetTalkListResDto {
    Long talkId;
    LocalDateTime visitedDate;
}
