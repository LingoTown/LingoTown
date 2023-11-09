package com.lingotown.domain.member.dto.request;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class UpdateSelectedCharacterRequestDto {

    private Long previousId;
    private Long nowId;

    public UpdateSelectedCharacterRequestDto(Long previousId, Long nowId) {
        this.previousId = previousId;
        this.nowId = nowId;
    }
}
