package com.lingotown.domain.member.service;

import com.lingotown.domain.member.dto.response.MemberInfoResponseDto;
import com.lingotown.domain.member.entity.Member;
import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.global.data.LoginType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberInfoResponseDto getMemberInfo(Long userId) {
        Member member = memberRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 유저가 없습니다."));
        return MemberInfoResponseDto.of(member);
    }

    @Transactional
    public void leaveService(Long userId) {
        Member member = memberRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 유저가 없습니다."));
        member.leaveService();
    }

    @Transactional
    public void tempRejoinService(Long userId) {
        Member member = memberRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 유저가 없습니다."));
        member.tempRejoin();
    }

    @Transactional
    public Member enterMember(HashMap<String, Object> userInfo, LoginType loginType) {
        Member member = Member
                .builder()
                .loginId(userInfo.get("loginId").toString())
                .loginType(loginType)
                .nickname(userInfo.get("nickname").toString())
                .profile(userInfo.get("profileImg").toString())
                .email(userInfo.get("email").toString())
                .build();
        return memberRepository.save(member);
    }

    boolean isEmpty(String loginId, LoginType loginType) {
        Optional<Member> checkUser = memberRepository.findByLoginIdAndLoginType(loginId, loginType);
        return checkUser.isEmpty();
    }
}
