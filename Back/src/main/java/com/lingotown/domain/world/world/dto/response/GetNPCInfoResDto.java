package com.lingotown.domain.world.world.dto.response;

import com.lingotown.domain.npc.npc.entity.NPC;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GetNPCInfoResDto {

    private Long npcId;
    private String name;
    private String npcRole;
    private String genderType;
    private String ageGroup;
    private String firstMessage;
    private String voice;

    public static GetNPCInfoResDto of(NPC npc){
        return GetNPCInfoResDto
                .builder()
                .npcId(npc.getId())
                .name(npc.getName())
                .npcRole(npc.getNpcRole().toString())
                .genderType(npc.getGenderType().toString())
                .ageGroup(npc.getAgeGroup().toString())
                .firstMessage(npc.getFirstMessage())
                .voice(npc.getVoice())
                .build();
    }
}
