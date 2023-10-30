package com.lingotown.domain.talk.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CreateTalkDetailReqDto {

    private Long talkId;
    private boolean isMember;
    private String content;
    private MultipartFile talkFile;

}
