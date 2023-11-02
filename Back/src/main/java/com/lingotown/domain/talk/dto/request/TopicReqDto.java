package com.lingotown.domain.talk.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.checkerframework.checker.units.qual.N;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TopicReqDto {
    private Long talkId;
    private String topic;
}
