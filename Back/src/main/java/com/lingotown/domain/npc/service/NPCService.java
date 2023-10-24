package com.lingotown.domain.npc.service;

import com.lingotown.domain.npc.dto.response.ReadTopicResDto;
import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.domain.npc.entity.Topic;
import com.lingotown.domain.npc.repository.NPCRepository;
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
public class NPCService {

    private final NPCRepository npcRepository;

    //NPC가 가지고 있는 토픽 가져오기
    public DataResponse<List<ReadTopicResDto>> readNPCTopicList(Long npcId){
        NPC npc = getNPCEntity(npcId);
        List<Topic> topicList = npc.getTopicList();

        List<ReadTopicResDto> topicResList = new ArrayList<>();
        for(Topic topic : topicList){
            topicResList.add(ReadTopicResDto.of(topic));
        }

        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), topicResList);
    }

    private NPC getNPCEntity(Long npcId){
        NPC npc = npcRepository.findById(npcId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.NPC_NOT_FOUND));

        return npc;
    }

}
