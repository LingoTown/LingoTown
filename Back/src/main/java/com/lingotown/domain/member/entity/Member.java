package com.lingotown.domain.member.entity;

import com.lingotown.domain.world.world.entity.World;
import com.lingotown.domain.membernpc.entity.MemberNPC;
import com.lingotown.global.baseTimeEntity.BaseTimeEntity;
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

    @Column(nullable = false)
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

    private LocalDateTime deleteAt;

    @JoinColumn(name="world_id")
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private World world;

    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    private List<MemberNPC> memberNPCList = new ArrayList<>();

    @Builder
    public Member(String loginId, LoginType loginType, String nickname, String profile, String email) {
        this.loginId = loginId;
        this.loginType = loginType;
        this.nickname = nickname;
        this.profile = profile;
        this.email = email;
        this.role = MemberRole.MEMBER;
        this.genderType = GenderType.BLANK;
    }

    //사용자 탈퇴
    public void leaveService(){
        this.deleteAt = LocalDateTime.now();
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
        this.deleteAt = null;
    }


}
