package com.lingotown.domain.talk.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.Value;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Column;

@Getter
@AllArgsConstructor
public class TalkReqDto {
    private Long talkId;
    private String topic;
    private String prompt;
    private MultipartFile talkFile;
}
