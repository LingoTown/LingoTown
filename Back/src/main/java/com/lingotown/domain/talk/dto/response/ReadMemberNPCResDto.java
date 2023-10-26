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
    Long memberNPCId;
    int talkCount;
    int intimacy;

    Long npcId;
    String npcName;
    String npcImage;
    String language;
    String theme;

    LocalDateTime lastVisited;
}