package com.lingotown.domain.world.controller;

import com.lingotown.domain.world.dto.response.ReadNPCInfoResDto;
import com.lingotown.domain.world.dto.response.ReadWorldInfoResDto;
import com.lingotown.domain.world.service.WorldService;
import com.lingotown.global.data.Language;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
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
        System.out.println("language : " +language);

        List<ReadWorldInfoResDto> worldInfoResDtoList = worldService.readWorldInfoList(language);
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(),
                ResponseStatus.RESPONSE_SUCCESS.getMessage(), worldInfoResDtoList);
    }


    @GetMapping("/{worldId}")
    public DataResponse<List<ReadNPCInfoResDto>> readNPCInfoList(@PathVariable("worldId") Long worldId){
            List<ReadNPCInfoResDto> npcInfoResDtoList = worldService.readNPCInfoList(worldId);
            return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(),
                    ResponseStatus.RESPONSE_SUCCESS.getMessage(), npcInfoResDtoList);
    }


}
