package com.lingotown.domain.world.service;

import com.lingotown.domain.npc.dto.response.ReadTopicResDto;
import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.domain.npc.entity.Topic;
import com.lingotown.domain.world.dto.response.ReadNPCInfoResDto;
import com.lingotown.domain.world.dto.response.ReadWorldInfoResDto;
import com.lingotown.domain.world.entity.World;
import com.lingotown.domain.world.repository.WorldRepository;
import com.lingotown.global.data.Language;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class WorldService {

    private final WorldRepository worldRepository;

    public DataResponse<List<ReadWorldInfoResDto>> readWorldInfoList(Language language){
        List<World> worldInfoList = worldRepository.findByLanguage(language);

        List<ReadWorldInfoResDto> worldInfoResDtoList = new ArrayList<>();
        for(World world : worldInfoList){
            worldInfoResDtoList.add(ReadWorldInfoResDto.of(world));
        }

        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(),
                ResponseStatus.RESPONSE_SUCCESS.getMessage(), worldInfoResDtoList);
    }


    public DataResponse<List<ReadNPCInfoResDto>> readNPCInfoList(Long worldId){
        World world = getWorldEntity(worldId);

        List<NPC> npcList = world.getNpcList();
        List<ReadNPCInfoResDto> npcInfoList = new ArrayList<>();
        for(NPC npc : npcList){

            List<Topic> topicList = npc.getTopicList();
            List<ReadTopicResDto> topicResDtoList = new ArrayList<>();
            for(Topic topic : topicList){
                topicResDtoList.add(ReadTopicResDto.of(topic));
            }

            ReadNPCInfoResDto npcInfoResDto= ReadNPCInfoResDto
                        .builder()
                        .npcId(npc.getId())
                        .name(npc.getName())
                        .npcRole(npc.getNpcRole().toString())
                        .genderType(npc.getGenderType().toString())
                        .npcAge(npc.getNpcAge())
                        .situation(npc.getSituation())
                        .voice(npc.getVoice())
                        .topicList(topicResDtoList)
                        .build();

            npcInfoList.add(npcInfoResDto);
        }

        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(),
                ResponseStatus.RESPONSE_SUCCESS.getMessage(), npcInfoList);
    }

    private World getWorldEntity(Long worldId){
        return worldRepository.findById(worldId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.WORLD_NOT_FOUND));
    }

}
