package com.lingotown.domain.world.service;

import com.lingotown.domain.world.dto.response.ReadNPCInfoResDto;
import com.lingotown.domain.world.dto.response.ReadWorldInfoResDto;
import com.lingotown.domain.world.entity.World;
import com.lingotown.domain.world.repository.WorldRepository;
import com.lingotown.global.data.Language;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class WorldServiceTest {

    @Mock
    private WorldRepository worldRepository;

    @InjectMocks
    private WorldService worldService;

    @Test
    void readWorldInfoList() {

        // 가짜 데이터 설정
        Language testLanguage = Language.ENGLISH;

        World worldA = World.builder()
                .id(1L)
                .theme("theme1")
                .language(Language.ENGLISH)
                .build();
        World worldB = World.builder()
                .id(2L)
                .theme("theme2")
                .language(Language.ENGLISH)
                .build();

        List<World> mockWorldList = Arrays.asList(worldA, worldB);
        when(worldRepository.findByLanguage(testLanguage)).thenReturn(mockWorldList);

        // 메서드 호출
        DataResponse<List<ReadWorldInfoResDto>> response = worldService.readWorldInfoList(testLanguage);

        // 검증
        assertNotNull(response);
        assertEquals(ResponseStatus.RESPONSE_SUCCESS.getCode(), response.getCode());
        assertEquals(mockWorldList.size(), response.getData().size());

        // 목 객체의 상호작용 검증
        verify(worldRepository).findByLanguage(testLanguage);
    }

    @Test
    void readNPCInfoListTest() {
        // 가짜 데이터 설정
        Long testWorldId = 1L;
        World mockWorld = mock(World.class);
        when(worldRepository.findById(testWorldId)).thenReturn(Optional.of(mockWorld));

        // NPC와 Topic 목록 설정 (필요하다면)
        // ...

        // 메서드 호출
        DataResponse<List<ReadNPCInfoResDto>> response = worldService.readNPCInfoList(testWorldId);

        // 검증
        assertNotNull(response);
        assertEquals(ResponseStatus.RESPONSE_SUCCESS.getCode(), response.getCode());

        // 목 객체의 상호작용 검증
        verify(worldRepository).findById(testWorldId);
    }
}