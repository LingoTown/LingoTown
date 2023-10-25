package com.lingotown.domain.member.service;

import com.lingotown.domain.member.dto.request.EditNicknameReqDto;
import com.lingotown.domain.member.dto.response.EditProfileResDto;
import com.lingotown.domain.member.dto.response.MemberInfoResponseDto;
import com.lingotown.domain.member.entity.Member;
import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.global.data.LoginType;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import com.lingotown.global.response.CommonResponse;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import com.lingotown.global.service.S3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;
import java.util.HashMap;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;
    private final S3Service s3Service;

    //사용자 정보 조회
    public DataResponse readMemberInfo(Principal principal) {
        Long memberId = Long.parseLong(principal.getName());

        Member member = getMemberEntity(memberId);
        MemberInfoResponseDto memberInfoDto = MemberInfoResponseDto.of(member);
        return new DataResponse(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), memberInfoDto);
    }

    //사용자 탈퇴
    @Transactional
    public CommonResponse removeMember(Principal principal) {
        Long memberId = Long.parseLong(principal.getName());

        Member member = getMemberEntity(memberId);
        member.leaveService();
        return new CommonResponse(ResponseStatus.DELETED_SUCCESS.getCode(), ResponseStatus.DELETED_SUCCESS.getMessage());
    }

    //사용자 닉네임 변경
    @Transactional
    public CommonResponse editNickname(Principal principal, EditNicknameReqDto editNicknameReqDto){
        Long memberId = Long.parseLong(principal.getName());
        Member member = getMemberEntity(memberId);

        String nickname = editNicknameReqDto.getNickname();
        member.editNickname(nickname);
        return new CommonResponse(ResponseStatus.UPDATED_SUCCESS.getCode(), ResponseStatus.UPDATED_SUCCESS.getMessage());
    }

    //사용자 프로필 변경
    @Transactional
    public DataResponse<EditProfileResDto> editProfile(Principal principal, MultipartFile file) throws IOException {
        Long memberId = Long.parseLong(principal.getName());
        Member member = getMemberEntity(memberId);

        String fileUrl = s3Service.uploadFile(memberId, file);
        member.editProfile(fileUrl);

        EditProfileResDto profileResDto = EditProfileResDto
                .builder()
                .profile(fileUrl)
                .build();
        return new DataResponse(ResponseStatus.UPDATED_SUCCESS.getCode(), ResponseStatus.UPDATED_SUCCESS.getMessage(), profileResDto);
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
        return memberRepository.findById(memberId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_NOT_FOUND));
    }
}
