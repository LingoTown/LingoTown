package com.lingotown.domain.membernpc.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class ReadMemberNPCResDto {
    Long memberNPCId;
    int talkCount;
    int intimacy;

    Long npcId;
    String language;
    String theme;

    LocalDateTime lastVisited;
}