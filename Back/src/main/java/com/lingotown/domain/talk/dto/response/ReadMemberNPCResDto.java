package com.lingotown.domain.talk.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReadMemberNPCResDto {
    private Long memberNPCId;
    private int talkCount;
    private int intimacy;

    private Long npcId;
    private String npcName;
    private String npcImage;
    private String language;
    private String theme;

    private LocalDateTime lastVisited;
}