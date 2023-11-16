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

    private Long topicId;
    private String keyword;
    private String koKeyword;

    public static ReadTopicResDto of(Topic topic){
        return ReadTopicResDto
                .builder()
                .topicId(topic.getId())
                .keyword(topic.getKeyword())
                .koKeyword(topic.getKoreanKeyword())
                .build();
    }
}
