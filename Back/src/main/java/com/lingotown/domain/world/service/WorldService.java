package com.lingotown.domain.world.service;

import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.domain.world.dto.response.ReadNPCInfoResDto;
import com.lingotown.domain.world.dto.response.ReadWorldInfoResDto;
import com.lingotown.domain.world.entity.World;
import com.lingotown.domain.world.repository.WorldRepository;
import com.lingotown.global.data.Language;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
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

    public List<ReadWorldInfoResDto> readWorldInfoList(Language language){
        List<World> worldInfoList = worldRepository.findByLanguage(language);

        List<ReadWorldInfoResDto> worldInfoResDtoList = new ArrayList<>();
        for(World world : worldInfoList){
            worldInfoResDtoList.add(ReadWorldInfoResDto.of(world));
        }

        return worldInfoResDtoList;
    }


    public List<ReadNPCInfoResDto> readNPCInfoList(Long worldId){
        World world = getWorldEntity(worldId);

        List<NPC> npcList = world.getNpcList();

        List<ReadNPCInfoResDto> npcInfoList = new ArrayList<>();
        for(NPC npc : npcList){
            npcInfoList.add(ReadNPCInfoResDto.of(npc));
        }

        return npcInfoList;
    }

    private World getWorldEntity(Long worldId){
        World world = worldRepository.findById(worldId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.WORLD_NOT_FOUND));

        return world;
    }

}
