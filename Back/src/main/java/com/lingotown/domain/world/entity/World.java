package com.lingotown.domain.world.entity;

import com.lingotown.domain.npc.entity.NPC;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.ui.context.Theme;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class World {

    @Id
    @GeneratedValue
    @Column(name = "world_id")
    private Long id;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Theme theme;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Language language;

    @OneToMany(mappedBy = "npc", cascade = CascadeType.ALL)
    List<NPC> npcList = new ArrayList<>();
}