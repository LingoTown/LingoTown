package com.lingotown.domain.member.service;

import com.lingotown.domain.character.entity.Character;
import com.lingotown.domain.member.dto.request.EditNicknameReqDto;
import com.lingotown.domain.member.dto.response.EditProfileResDto;
import com.lingotown.domain.member.dto.response.MemberInfoResponseDto;
import com.lingotown.domain.member.entity.Member;
import com.lingotown.domain.member.entity.MemberQuiz;
import com.lingotown.domain.member.repository.MemberQuizRepository;
import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.domain.world.dto.response.ReadMemberQuizResDto;
import com.lingotown.domain.world.entity.Quiz;
import com.lingotown.domain.world.entity.World;
import com.lingotown.domain.world.repository.WorldRepository;
import com.lingotown.global.data.GenderType;
import com.lingotown.global.data.LoginType;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import com.lingotown.global.response.CommonResponse;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import com.lingotown.global.service.S3Service;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberService {

    @Value("s3url")
    private String S3url;

    private final MemberRepository memberRepository;
    private final WorldRepository worldRepository;
    private final MemberQuizRepository memberQuizRepository;
    private final S3Service s3Service;

    //사용자 정보 조회
    public DataResponse<MemberInfoResponseDto> readMemberInfo(Principal principal) {
        Long memberId = Long.parseLong(principal.getName());

        Member member = getMemberEntity(memberId);
        MemberInfoResponseDto memberInfoDto = MemberInfoResponseDto.of(member);
        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(), ResponseStatus.RESPONSE_SUCCESS.getMessage(), memberInfoDto);
    }

    //테마가 가진 quiz 중 멤버가 푼 quiz 조회
    public DataResponse<List<ReadMemberQuizResDto>> readSolvedQuiz(Principal principal, Long worldId){
        Long memberId = Long.valueOf(principal.getName());

        World world = getWorldEntity(worldId);
        List<Quiz> quizList = world.getQuizList();

        List<ReadMemberQuizResDto> memberQuizResList = new ArrayList<>();
        for(Quiz quiz : quizList){

            Optional<MemberQuiz> memberQuiz = memberQuizRepository.findByMemberIdAndQuizId(memberId, quiz.getId());
            if(memberQuiz.isPresent()) continue;

            ReadMemberQuizResDto memberQuizResDto = ReadMemberQuizResDto
                    .builder()
                    .quizId(memberQuiz.get().getId())
                    .build();
            memberQuizResList.add(memberQuizResDto);
        }

        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(),
                ResponseStatus.RESPONSE_SUCCESS.getMessage(), memberQuizResList);
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

        String fileUrl = s3Service.uploadFile(file);
        member.editProfile(fileUrl);

        EditProfileResDto profileResDto = EditProfileResDto
                .builder()
                .profile(fileUrl)
                .build();
        return new DataResponse<>(ResponseStatus.UPDATED_SUCCESS.getCode(), ResponseStatus.UPDATED_SUCCESS.getMessage(), profileResDto);
    }

    @Transactional
    public void tempRejoinService(Long memberId) {
        Member member = getMemberEntity(memberId);
        member.tempRejoin();
    }

    @Transactional
    public Member enterMember(HashMap<String, Object> userInfo, LoginType loginType) {
        log.info(S3url);

        Character defaultCharacter = Character.builder()
                .id(1L)
                .gender(GenderType.MAN)
                .link(S3url + "Player/m_1.glb")
                .build();

        Member member = Member
                .builder()
                .loginId(userInfo.get("loginId").toString())
                .loginType(loginType)
                .nickname(userInfo.get("nickname").toString())
                .profile(userInfo.get("profileImg").toString())
                .email(userInfo.get("email").toString())
                .character(defaultCharacter)
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

    private World getWorldEntity(Long worldId){
        return worldRepository.findById(worldId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.WORLD_NOT_FOUND));
    }

}
