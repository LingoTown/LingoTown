package com.lingotown.domain.talk.dto.response;

import com.lingotown.domain.talk.entity.TalkDetail;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GetTalkDetailResDto {

    private Long talkDetailId;
    private boolean isMember;
    private String content;
    private String talkFile;
    private LocalDateTime createdAt;

    public static GetTalkDetailResDto of(TalkDetail talkDetail){
        return GetTalkDetailResDto
                .builder()
                .talkDetailId(talkDetail.getId())
                .isMember(talkDetail.getIsMember())
                .content(talkDetail.getContent())
                .talkFile(talkDetail.getTalkFile())
                .createdAt(talkDetail.getCreatedAt())
                .build();
    }
}
