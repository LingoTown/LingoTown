package com.lingotown.domain.character.dto;

import com.lingotown.global.data.GenderType;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class CharacterResponseDto {

    private Long characterId;
    private GenderType characterGender;
    private String characterLink;

    public CharacterResponseDto(Long characterId, GenderType characterGender, String characterLink) {
        this.characterId = characterId;
        this.characterGender = characterGender;
        this.characterLink = characterLink;
    }
}
