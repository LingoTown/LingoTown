package com.lingotown.domain.npc.service;

import com.lingotown.domain.npc.dto.response.ReadTopicResDto;
import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.domain.npc.entity.Topic;
import com.lingotown.domain.npc.repository.NPCRepository;
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
public class NPCService {

    private final NPCRepository npcRepository;

    public List<ReadTopicResDto> readNPCTopicList(Long npcId){
        NPC npc = getNPCEntity(npcId);
        List<Topic> topicList = npc.getTopicList();

        List<ReadTopicResDto> topicResList = new ArrayList<>();
        for(Topic topic : topicList){
            topicResList.add(ReadTopicResDto.of(topic));
        }

        return topicResList;
    }

    private NPC getNPCEntity(Long npcId){
        NPC npc = npcRepository.findById(npcId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.NPC_NOT_FOUND));

        return npc;
    }

}
