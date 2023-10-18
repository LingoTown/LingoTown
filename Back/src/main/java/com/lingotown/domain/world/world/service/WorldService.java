package com.lingotown.domain.world.world.service;

import com.lingotown.domain.npc.npc.entity.NPC;
import com.lingotown.domain.world.world.dto.response.GetNPCInfoResDto;
import com.lingotown.domain.world.world.dto.response.GetWorldInfoResDto;
import com.lingotown.domain.world.world.entity.World;
import com.lingotown.domain.world.world.repository.WorldRepository;
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

    public List<GetWorldInfoResDto> getWorldInfoList(String language){
        List<World> worldInfoList = worldRepository.findByLanguage(language);

        List<GetWorldInfoResDto> worldInfoResDtoList = new ArrayList<>();
        for(World world : worldInfoList){
            worldInfoResDtoList.add(GetWorldInfoResDto.of(world));
        }

        return worldInfoResDtoList;
    }


    public List<GetNPCInfoResDto> getNPCInfoList(Long worldId){
        World world = getWorldEntity(worldId);
        List<NPC> npcList = world.getNpcList();

        List<GetNPCInfoResDto> npcInfoList = new ArrayList<>();
        for(NPC npc : npcList){
            npcInfoList.add(GetNPCInfoResDto.of(npc));
        }

        return npcInfoList;
    }



    private World getWorldEntity(Long worldId){
        World world = worldRepository.findById(worldId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.WORLD_NOT_FOUND));

        return world;
    }

}
