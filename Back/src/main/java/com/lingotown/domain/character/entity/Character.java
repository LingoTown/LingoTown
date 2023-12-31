package com.lingotown.domain.character.entity;

import com.lingotown.global.data.GenderType;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "characters")
public class Character {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "character_id", nullable = false, unique = true)
    private Long id;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private GenderType gender;

    @Column(nullable = false)
    private String link;

    @Column(nullable = false)
    private String image;

    @Builder
    public Character(Long id, GenderType gender, String link, String image) {
        this.id = id;
        this.gender = gender;
        this.link = link;
        this.image = image;
    }
}
