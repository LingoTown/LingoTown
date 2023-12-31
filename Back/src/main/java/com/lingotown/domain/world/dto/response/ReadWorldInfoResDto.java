package com.lingotown.domain.world.dto.response;

import com.lingotown.domain.world.entity.World;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReadWorldInfoResDto {

    private Long worldId;
    private String theme;
    private String language;

    public static ReadWorldInfoResDto of(World world) {
        return ReadWorldInfoResDto
                .builder()
                .worldId(world.getId())
                .theme(world.getTheme())
                .language(world.getLanguage().toString())
                .build();
    }

}
