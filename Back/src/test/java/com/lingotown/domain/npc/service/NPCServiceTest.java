package com.lingotown.domain.npc.service;

import com.lingotown.domain.npc.dto.response.ReadTopicResDto;
import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.domain.npc.repository.NPCRepository;
import com.lingotown.global.data.GenderType;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.*;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import javax.persistence.EntityManager;

@ExtendWith(MockitoExtension.class)
class NPCServiceTest {

    @Mock
    EntityManager em;

    @Mock
    private NPCRepository npcRepository;

    @InjectMocks
    private NPCService npcService;

    @Test
    public void successReadNPCTopicList() {
        NPC npc = NPC.builder()
                .id(1L)
                .name("Name1")
                .npcImage("Image1")
                .situation("Situation1")
                .voice("Voice1")
                .genderType(GenderType.MAN)
                .npcRole("Role1")
                .npcAge(11)
                .topicList(List.of())
                .build();

        when(npcRepository.findById(npc.getId())).thenReturn(Optional.of(npc));

        List<ReadTopicResDto> expectedTopicResList = npc.getTopicList().stream()
                .map(topic -> new ReadTopicResDto(/* 필요한 매개변수 */))
                .collect(Collectors.toList());

        // when
        DataResponse<List<ReadTopicResDto>> response = npcService.readNPCTopicList(1L);

        // then
        assertEquals(expectedTopicResList, response.getData());
        assertEquals(ResponseStatus.RESPONSE_SUCCESS.getCode(), response.getCode());
    }

    @Test
    public void failReadNPC() {
        // given
        Long npcId = 1L;

        when(npcRepository.findById(npcId)).thenThrow(new CustomException(ExceptionStatus.NPC_NOT_FOUND));

        // when
        CustomException exception = assertThrows(CustomException.class, () -> npcService.readNPCTopicList(npcId));

        // then
        assertNotNull(exception.getExceptionStatus()); // 예외 상태가 null이 아닌지 확인
        assertEquals(ExceptionStatus.NPC_NOT_FOUND, exception.getExceptionStatus()); // 실제 예외 상태 객체가 기대한 것과 같은지 확인
        assertEquals(ExceptionStatus.NPC_NOT_FOUND.getMessage(), exception.getExceptionStatus().getMessage()); // 예외 메시지가 기대한 것과 같은지 확인
    }
}