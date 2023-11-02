package com.lingotown.domain.world.entity;

import org.checkerframework.checker.units.qual.C;

import javax.persistence.*;

@Entity
public class Quiz {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quiz_id")
    private Long id;

    @Column(nullable = false)
    private String quizContent;

    @Column(nullable = false)
    private String quizAnswer;

    @JoinColumn(name = "world_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private World world;
}
