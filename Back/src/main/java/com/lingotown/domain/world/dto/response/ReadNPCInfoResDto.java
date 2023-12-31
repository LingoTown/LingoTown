package com.lingotown.domain.world.dto.response;

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
public class ReadNPCInfoResDto {

    private Long npcId;
    private String name;
    private String npcRole;
    private String genderType;
    private int npcAge;
    private String voice;
    private List<ReadTopicResDto> topicList;

}
