package com.lingotown.domain.member.entity;

import com.lingotown.domain.world.entity.World;
import com.lingotown.domain.membernpc.entity.MemberNPC;
import com.lingotown.global.baseTimeEntity.BaseTimeEntity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends BaseTimeEntity {

    @Id
    @GeneratedValue
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

    @OneToMany(mappedBy = "member_npc", cascade = CascadeType.ALL)
    List<MemberNPC> memberNPCList = new ArrayList<>();

    //사용자 탈퇴
    public void editDeleteAt(){
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


}
