package com.lingotown.domain.npc.controller;

import com.lingotown.domain.npc.dto.response.GetTopicResDto;
import com.lingotown.domain.npc.service.NPCService;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/npc")
public class NPCController {

    private final NPCService npcService;

    @GetMapping("{npcId}")
    public DataResponse<List<GetTopicResDto>> getTopicList(@PathVariable("npcId") Long npcId){
        List<GetTopicResDto> topicList = npcService.getTopicList(npcId);
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), topicList);
    }

}
