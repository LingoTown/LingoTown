package com.lingotown.domain.npc.entity;

import com.lingotown.domain.talk.entity.MemberNPC;
import com.lingotown.domain.world.entity.World;
import com.lingotown.global.data.GenderType;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED) @AllArgsConstructor
@Table(name = "npc")
public class NPC {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "npc_id")
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String npcImage;

    @Column(nullable = false)
    private String situation;

    @Column(nullable = false)
    private String voice;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private GenderType genderType;

    @Column(nullable = false)
    private String npcRole;

    @Column(nullable = false)
    private int npcAge;

    @JoinColumn(name="world_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private World world;

    @Builder.Default
    @OneToMany(mappedBy = "npc", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    private List<Topic> topicList = new ArrayList<>();

    @Builder.Default
    @OneToMany(mappedBy = "npc", fetch = FetchType.LAZY)
    private List<MemberNPC> memberNpcList = new ArrayList<>();
}
