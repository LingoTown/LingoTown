package com.lingotown.domain.talk.dto.request;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class CreateTalkDetailReqDto {
     private Long talkId;
     private boolean isMember;
     private String content;
     private MultipartFile talkFile;

}
