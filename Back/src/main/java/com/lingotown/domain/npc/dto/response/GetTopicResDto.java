package com.lingotown.domain.npc.dto.response;

import com.lingotown.domain.npc.entity.Topic;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GetTopicResDto {

    Long id;
    String keyword;

    public static GetTopicResDto of(Topic topic){
        return GetTopicResDto
                .builder()
                .id(topic.getId())
                .keyword(topic.getKeyword())
                .build();
    }
}
