package com.lingotown.domain.world.world.dto.response;

import com.lingotown.domain.world.world.entity.World;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GetWorldInfoResDto {

    Long worldId;
    String theme;
    String language;

    public static GetWorldInfoResDto of(World world) {
        return GetWorldInfoResDto
                .builder()
                .worldId(world.getId())
                .theme(world.getTheme().toString())
                .language(world.getTheme().toString())
                .build();
    }

}
