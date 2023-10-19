package com.lingotown.domain.world.service;

import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.domain.world.dto.response.GetNPCInfoResDto;
import com.lingotown.domain.world.dto.response.GetWorldInfoResDto;
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

    public List<GetWorldInfoResDto> getWorldInfoList(Language language){
        List<World> worldInfoList = worldRepository.findByLanguage(language);

        List<GetWorldInfoResDto> worldInfoResDtoList = new ArrayList<>();
        for(World world : worldInfoList){
            worldInfoResDtoList.add(GetWorldInfoResDto.of(world));
        }

        return worldInfoResDtoList;
    }


    public List<GetNPCInfoResDto> getNPCInfoList(Long worldId){
        World world = getWorldEntity(worldId);
        System.out.println("world : " +world.getId());

        List<NPC> npcList = world.getNpcList();
        System.out.println("npcListSize : " +npcList.size());

        List<GetNPCInfoResDto> npcInfoList = new ArrayList<>();
        for(NPC npc : npcList){
            System.out.println("npc : " +npc.getId());
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
