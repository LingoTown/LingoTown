package com.lingotown.domain.talk.entity;

import com.lingotown.domain.membernpc.entity.MemberNPC;
import com.lingotown.global.baseTimeEntity.BaseTimeEntity;
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
public class Talk extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "talk_id")
    private Long id;

    private LocalDateTime deletedAt;

    @JoinColumn(name = "member_npc_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private MemberNPC memberNPC;

    @OneToMany(mappedBy = "talk", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    List<TalkDetail> talkDetailList = new ArrayList<>();

    //대화 기록 삭제
    public void deleteTalkHistory(){
        this.deletedAt = LocalDateTime.now();
    }


    @Builder
    public Talk(MemberNPC memberNPC){
        this.memberNPC = memberNPC;
        this.talkDetailList = new ArrayList<>();
    }
}