package com.lingotown.domain.character.controller;

import com.lingotown.domain.character.dto.CharacterResponseDto;
import com.lingotown.domain.character.service.CharacterService;
import com.lingotown.global.response.DataResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/character")
public class CharacterController {

    private final CharacterService characterService;

    @GetMapping("")
    public DataResponse<List<CharacterResponseDto>> getCharacterList() {

        return characterService.getCharacterList();
    }
}
