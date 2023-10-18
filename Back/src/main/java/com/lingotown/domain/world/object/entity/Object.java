package com.lingotown.domain.world.object.entity;

import com.lingotown.domain.world.world.entity.World;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Object {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "object_id")
    private Long id;

    @Column(nullable = false)
    private String name;

    @JoinColumn(name = "world_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private World world;
}
