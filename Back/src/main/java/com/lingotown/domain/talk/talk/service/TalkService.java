package com.lingotown.domain.talk.talk.service;


import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.domain.talk.talk.repository.TalkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TalkService {

    private final MemberRepository memberRepository;
    private final TalkRepository talkRepository;


}
