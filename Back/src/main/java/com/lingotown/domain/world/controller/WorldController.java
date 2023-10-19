package com.lingotown.domain.world.controller;

import com.lingotown.domain.world.dto.response.ReadNPCInfoResDto;
import com.lingotown.domain.world.dto.response.ReadWorldInfoResDto;
import com.lingotown.domain.world.service.WorldService;
import com.lingotown.global.data.Language;
import com.lingotown.global.response.DataResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/world")
public class WorldController {

    private final WorldService worldService;

    @GetMapping("/theme/{language}")
    public DataResponse<List<ReadWorldInfoResDto>> readWorldInfoList(@PathVariable("language") Language language){
        return worldService.readWorldInfoList(language);
    }


    @GetMapping("/{worldId}")
    public DataResponse<List<ReadNPCInfoResDto>> readNPCInfoList(@PathVariable("worldId") Long worldId){
           return worldService.readNPCInfoList(worldId);
    }

}
