package com.lingotown.domain.npc.controller;

import com.lingotown.domain.npc.dto.response.ReadTopicResDto;
import com.lingotown.domain.npc.service.NPCService;
import com.lingotown.global.response.DataResponse;
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
    public DataResponse<List<ReadTopicResDto>> readNPCTopicList(@PathVariable("npcId") Long npcId){
        return npcService.readNPCTopicList(npcId);
    }

}
