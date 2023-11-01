package com.lingotown.domain.talk.dto.response;

import com.lingotown.domain.npc.dto.response.ReadTopicResDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CreateTalkResDto {
    Long talkId;
    Long npcId;
    List<ReadTopicResDto> topicList;
}
