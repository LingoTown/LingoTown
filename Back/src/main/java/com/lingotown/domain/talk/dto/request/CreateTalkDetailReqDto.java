package com.lingotown.domain.talk.dto.request;

import lombok.Getter;

@Getter
public class CreateTalkDetailReqDto {

    Long talkId;
    boolean isMember;
    String content;
    String talkFile;

}
