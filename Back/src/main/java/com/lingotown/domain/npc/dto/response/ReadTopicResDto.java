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
public class ReadTopicResDto {

    Long topicId;
    String keyword;

    public static ReadTopicResDto of(Topic topic){
        return ReadTopicResDto
                .builder()
                .topicId(topic.getId())
                .keyword(topic.getKeyword())
                .build();
    }
}
