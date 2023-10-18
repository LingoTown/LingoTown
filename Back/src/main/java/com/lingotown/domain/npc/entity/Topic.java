package com.lingotown.domain.npc.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "topic_id")
    private Long id;

    @Column(nullable = false)
    private String keyword;

    @JoinColumn(name="npc_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private NPC npc;



}
