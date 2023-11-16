package com.lingotown.domain.world.entity;

import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.global.data.Language;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class World {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "world_id")
    private Long id;

    @Column(nullable = false)
    private String theme;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Language language;

    @OneToMany(mappedBy = "world", cascade = CascadeType.ALL)
    private List<NPC> npcList = new ArrayList<>();

    @OneToMany(mappedBy = "world", cascade = CascadeType.REMOVE)
    private List<Quiz> quizList = new ArrayList<>();

    @Builder
    public World(Long id, String theme, Language language) {
        this.id = id;
        this.theme = theme;
        this.language = language;
    }
}