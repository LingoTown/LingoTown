package com.lingotown.domain.member.service;

import com.lingotown.domain.character.dto.CharacterResponseDto;
import com.lingotown.domain.character.entity.Character;
import com.lingotown.domain.character.repository.CharacterRepository;
import com.lingotown.domain.character.service.CharacterService;
import com.lingotown.domain.member.dto.request.UpdateSelectedCharacterRequestDto;
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

import java.security.Principal;
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
        List<MemberCharacter> memberCharacterList = memberCharacterRepository.findByMemberId(member.getId());

        boolean lockFlag = false;
        boolean selectFlag = false;

        for (int i=0; i<characterResponseDtoList.size(); i++) {

            if(i < memberCharacterList.size())
                continue;

            lockFlag = characterResponseDtoList.get(i).getCharacterId() > 2;

            selectFlag = characterResponseDtoList.get(i).getCharacterId() == 1;

            Character character = characterRepository.findById(characterResponseDtoList.get(i).getCharacterId())
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

    @Transactional
    public DataResponse<CharacterResponseDto> updateSelectedCharacter(Principal principal, UpdateSelectedCharacterRequestDto updateSelectedCharacterRequestDto) {
        Long memberId = Long.parseLong(principal.getName());

        MemberCharacter previousCharacter = memberCharacterRepository.findByMemberIdAndCharacterId(memberId, updateSelectedCharacterRequestDto.getPreviousId())
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_CHARACTER_NOT_FOUND));

        MemberCharacter nowCharacter = memberCharacterRepository.findByMemberIdAndCharacterId(memberId, updateSelectedCharacterRequestDto.getNowId())
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_CHARACTER_NOT_FOUND));

        previousCharacter.selectOff();
        nowCharacter.selectOn();

        Character character = characterRepository.findById(nowCharacter.getCharacter().getId())
                .orElseThrow(() -> new CustomException(ExceptionStatus.CHARACTER_NOT_FOUND));

        CharacterResponseDto characterResponseDto = CharacterResponseDto.builder()
                .characterId(character.getId())
                .characterGender(character.getGender())
                .characterLink(character.getLink())
                .build();

        return new DataResponse<>(ResponseStatus.UPDATED_SUCCESS.getCode(), ResponseStatus.UPDATED_SUCCESS.getMessage(), characterResponseDto);
    }

    public CommonResponse lockOffCharacter(Principal principal, Long characterId) {
        Long memberId = Long.parseLong(principal.getName());

        MemberCharacter memberCharacter = memberCharacterRepository.findByMemberIdAndCharacterId(memberId, characterId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_CHARACTER_NOT_FOUND));

        memberCharacter.lockOff();

        return new CommonResponse(ResponseStatus.UPDATED_SUCCESS.getCode(), ResponseStatus.UPDATED_SUCCESS.getMessage());
    }
}
