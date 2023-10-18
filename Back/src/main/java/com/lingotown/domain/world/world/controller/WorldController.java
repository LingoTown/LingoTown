package com.lingotown.domain.world.world.controller;

import com.lingotown.domain.world.world.dto.response.GetNPCInfoResDto;
import com.lingotown.domain.world.world.dto.response.GetWorldInfoResDto;
import com.lingotown.domain.world.world.service.WorldService;
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

    @GetMapping("/{language}")
    public DataResponse<List<GetWorldInfoResDto>> getWorldInfoList(@PathVariable("language") String language){
        List<GetWorldInfoResDto> worldInfoResDtoList = worldService.getWorldInfoList(language);
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(),
                ResponseStatus.RESPONSE_SUCCESS.getMessage(), worldInfoResDtoList);
    }


    @GetMapping("/{worldId}")
    public DataResponse<List<GetNPCInfoResDto>> getNPCInfoList(@PathVariable("worldId") Long worldId){
            List<GetNPCInfoResDto> npcInfoResDtoList = worldService.getNPCInfoList(worldId);
            return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(),
                    ResponseStatus.RESPONSE_SUCCESS.getMessage(), npcInfoResDtoList);
    }


}
