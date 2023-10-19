package com.lingotown.domain.world.dto.response;

import com.lingotown.domain.npc.entity.NPC;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReadNPCInfoResDto {

    private Long npcId;
    private String name;
    private String npcRole;
    private String genderType;
    private String npcAge;
    private String firstMessage;
    private String voice;

    public static ReadNPCInfoResDto of(NPC npc){
        return ReadNPCInfoResDto
                .builder()
                .npcId(npc.getId())
                .name(npc.getName())
                .npcRole(npc.getNpcRole().toString())
                .genderType(npc.getGenderType().toString())
                .npcAge(npc.getNpcAge().toString())
                .firstMessage(npc.getFirstMessage())
                .voice(npc.getVoice())
                .build();
    }
}
