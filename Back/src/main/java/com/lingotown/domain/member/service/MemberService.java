package com.lingotown.domain.member.service;

import com.lingotown.domain.member.dto.request.PutNicknameReqDto;
import com.lingotown.domain.member.dto.response.MemberInfoResponseDto;
import com.lingotown.domain.member.entity.Member;
import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.global.data.LoginType;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberInfoResponseDto getMemberInfo(Long memberId) {
        Member member = getMemberEntity(memberId);
        return MemberInfoResponseDto.of(member);
    }

    @Transactional
    public void leaveService(Long memberId) {
        Member member = getMemberEntity(memberId);
        member.leaveService();
    }

    @Transactional
    public void editNickname(Long memberId, PutNicknameReqDto putNicknameReqDto){
        Member member = getMemberEntity(memberId);

        String nickname = putNicknameReqDto.getNickname();
        member.editNickname(nickname);
    }

    @Transactional
    public void tempRejoinService(Long memberId) {
        Member member = getMemberEntity(memberId);
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

    private Member getMemberEntity(Long memberId){
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_NOT_FOUND));

        return member;
    }
}
