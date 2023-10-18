package com.lingotown.domain.npc.npc.entity;

import com.lingotown.domain.world.world.entity.World;
import com.lingotown.global.data.GenderType;
import com.lingotown.global.data.NPCAge;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "npc")
public class NPC {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "npc_id")
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String firstMessage;

    @Column(nullable = false)
    private String voice;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private GenderType genderType;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private NPCAge ageGroup;

    @JoinColumn(name="world_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private World world;

}
