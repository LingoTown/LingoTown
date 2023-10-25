package com.lingotown.domain.talk.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@AllArgsConstructor
public class CreateTalkDetailReqDto {

    private final Long talkId;
    private final boolean isMember;
    private final String content;
    private final MultipartFile talkFile;

}
