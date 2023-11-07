package com.lingotown.domain.talk.dto.request;

import com.lingotown.global.data.GenderType;
import lombok.*;
import org.checkerframework.checker.units.qual.N;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Column;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TalkReqDto {
    private Long talkId;
    private String prompt;
    private MultipartFile talkFile;

    private String language;
}
