package com.lingotown.domain.membernpc.entity;

import com.lingotown.domain.member.entity.Member;
import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.domain.talk.entity.Talk;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "member_npc")
public class MemberNPC {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_npc_id")
    private Long id;

    @Column(nullable = false)
    @ColumnDefault("0")
    private int intimacy;

    @JoinColumn(name = "member_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    @JoinColumn(name = "npc_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private NPC npc;

    @OneToMany(mappedBy = "memberNPC", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Talk> talkList = new ArrayList<>();

    @Builder
    public MemberNPC(Member member, NPC npc) {
        this.intimacy = 0;
        this.member = member;
        this.npc = npc;
        this.talkList = new ArrayList<>();
    }

    //친밀도 증가
    public void increaseIntimacy(){
        this.intimacy+=10;
    }
}
