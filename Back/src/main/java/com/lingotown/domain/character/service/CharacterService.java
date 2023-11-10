package com.lingotown.domain.character.service;

import com.lingotown.domain.character.dto.CharacterResponseDto;
import com.lingotown.domain.character.entity.Character;
import com.lingotown.domain.character.repository.CharacterRepository;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.apache.http.protocol.ResponseDate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Getter
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CharacterService {

    private final CharacterRepository characterRepository;

    public DataResponse<List<CharacterResponseDto>> getCharacterList() {
        List<Character> characterList = characterRepository.findAll();

        List<CharacterResponseDto> characterResponseDtoList = new ArrayList<>();

        for (Character c : characterList) {
            CharacterResponseDto characterResponseDto = CharacterResponseDto.builder()
                    .characterId(c.getId())
                    .characterGender(c.getGender())
                    .characterLink(c.getLink())
                    .characterImage(c.getImage())
                    .build();

            characterResponseDtoList.add(characterResponseDto);
        }

        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), characterResponseDtoList);
    }
}
