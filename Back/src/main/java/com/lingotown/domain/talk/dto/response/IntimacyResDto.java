package com.lingotown.domain.talk.dto.response;

import lombok.*;

@Getter @Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED) @AllArgsConstructor
public class IntimacyResDto {

    private Long memberId;
    private Long npcId;
    private int intimacy;
}
