package com.lingotown.domain.talk.talk.service;


import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.domain.talk.talk.repository.TalkRepository;
import com.lingotown.domain.talk.talk.response.GetTalkListResDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TalkService {

    private final MemberRepository memberRepository;
    private final TalkRepository talkRepository;


//    해당 NPC와의 talk 리스트
//    public GetTalkListResDto getTalkList(Long memberNPCId){
//        return new GetTalkListResDto(12, LocalDateTime.now());
//    }


}
