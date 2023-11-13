package com.lingotown.domain.talk.dto.request;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;


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
