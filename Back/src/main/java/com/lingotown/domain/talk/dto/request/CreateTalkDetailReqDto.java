package com.lingotown.domain.talk.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CreateTalkDetailReqDto {

    private final Long talkId;
    private final boolean isMember;
    private final String content;
    private final String talkFile;

}
