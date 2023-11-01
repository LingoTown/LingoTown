package com.lingotown.global.service;

import com.lingotown.domain.talk.entity.Talk;
import com.lingotown.domain.talk.repository.TalkRepository;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import com.lingotown.domain.talk.dto.request.OpenAIMessageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@CacheConfig(cacheNames = "talkId")
@RequiredArgsConstructor
public class CacheService {

    private final CacheManager cacheManager;
    private final TalkRepository talkRepository;

    // 대화 데이터를 캐싱
    public void cacheTalkData(Long talkId, List<OpenAIMessageDto> chatList) {
        Cache cache = cacheManager.getCache("talkId");
        cache.put(talkId, chatList);
    }

    // 이전 대화 데이터를 가져오기
    public List<OpenAIMessageDto> getAllPreviousChatData(Long talkId) {
        List<OpenAIMessageDto> previousChatDataList = new ArrayList<>();

        Cache cache = cacheManager.getCache("talkId");
        List<OpenAIMessageDto> chatList = cache.get(talkId, List.class);
        if (chatList != null) previousChatDataList.addAll(chatList);

        return previousChatDataList;
    }

    //캐시 삭제하기
    public void deleteTalkData(Long talkId) {
        Cache cache = cacheManager.getCache("talkId");
        cache.evict(talkId);
    }

    //캐시가 존재하는지 확인
    @Transactional
    public boolean hasCache(Long talkId) {
        Talk talk = getTalkEntity(talkId);

        if(talk.getTalkDetailList().size()==0) return false;
        return true;
    }

    private Talk getTalkEntity(Long talkId){
        return talkRepository.findById(talkId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.TALK_NOT_FOUND));
    }

}
