package com.lingotown.domain.member.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CharacterLockResponseDto {

    private Long characterId;

    private boolean islocked;

    @Builder
    public CharacterLockResponseDto(Long characterId, boolean islocked) {
        this.characterId = characterId;
        this.islocked = islocked;
    }
}
