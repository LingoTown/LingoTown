package com.lingotown.domain.member.entity;

import com.lingotown.domain.talk.entity.MemberNPC;
import com.lingotown.global.basetimeentity.BaseTimeEntity;
import com.lingotown.global.data.GenderType;
import com.lingotown.global.data.MemberRole;
import com.lingotown.global.data.LoginType;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @Column(nullable = false)
    private String loginId;

    @Column(nullable = false, length = 10)
    private String nickname;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String profile;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private MemberRole role;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private LoginType loginType;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private GenderType genderType;

    private LocalDateTime deletedAt;

    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    private List<MemberNPC> memberNPCList = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    List<MemberQuiz> memberQuizList = new ArrayList<>();

    @Builder
    public Member(Long id, String loginId, String nickname, String email, String profile,
                  MemberRole role, LoginType loginType, GenderType genderType, LocalDateTime deletedAt,
                  List<MemberNPC> memberNPCList, List<MemberQuiz> memberQuizList) {
        this.id = id;
        this.loginId = loginId;
        this.nickname = nickname;
        this.email = email;
        this.profile = profile;
        this.role = role;
        this.loginType = loginType;
        this.genderType = genderType;
        this.deletedAt = deletedAt;
        this.memberNPCList = memberNPCList;
        this.memberQuizList = memberQuizList;
    }

    //사용자 탈퇴
    public void leaveService(){
        this.deletedAt = LocalDateTime.now();
    }

    //사용자 정보 닉네임 수정
    public void editNickname(String nickname){
        this.nickname = nickname;
    }

    //사용자 정보 프로필 수정
    public void editProfile(String profile){
        this.profile = profile;
    }

    // 재가입
    public void tempRejoin() {
        this.deletedAt = null;
    }


}
