package com.lingotown.domain.npc.topic.entity;

import com.lingotown.domain.npc.npc.entity.NPC;

import javax.persistence.*;

@Entity
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "topic_id")
    private Long id;

    @Column(nullable = false)
    private String keyword;

    @JoinColumn(name="npc_id")
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private NPC npc;



}
