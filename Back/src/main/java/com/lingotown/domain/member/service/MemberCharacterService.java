package com.lingotown.domain.member.service;

import com.lingotown.domain.character.dto.CharacterResponseDto;
import com.lingotown.domain.character.entity.Character;
import com.lingotown.domain.character.repository.CharacterRepository;
import com.lingotown.domain.character.service.CharacterService;
import com.lingotown.domain.member.entity.Member;
import com.lingotown.domain.member.entity.MemberCharacter;
import com.lingotown.domain.member.repository.MemberCharacterRepository;
import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import com.lingotown.global.response.CommonResponse;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberCharacterService {

    private final MemberCharacterRepository memberCharacterRepository;
    private final MemberRepository memberRepository;
    private final CharacterRepository characterRepository;

    private final CharacterService characterService;

    @Transactional
    public CommonResponse createMemberCharacter(Member member) {
        List<CharacterResponseDto> characterResponseDtoList = characterService.getCharacterList().getData();

        boolean lockFlag = false;
        boolean selectFlag = false;

        for (CharacterResponseDto characterResponseDto : characterResponseDtoList) {

            lockFlag = characterResponseDto.getCharacterId() > 2;

            selectFlag = characterResponseDto.getCharacterId() == 1;

            Character character = characterRepository.findById(characterResponseDto.getCharacterId())
                    .orElseThrow(() -> new CustomException(ExceptionStatus.CHARACTER_NOT_FOUND));

            MemberCharacter memberCharacter = MemberCharacter.builder()
                    .isLocked(lockFlag)
                    .isSelected(selectFlag)
                    .member(member)
                    .character(character)
                    .build();



            memberCharacterRepository.save(memberCharacter);
        }

        return new CommonResponse(ResponseStatus.CREATED_SUCCESS.getCode(),
                ResponseStatus.CREATED_SUCCESS.getMessage());
    }
}
