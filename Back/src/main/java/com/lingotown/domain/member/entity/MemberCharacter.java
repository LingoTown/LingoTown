package com.lingotown.domain.member.entity;

import com.lingotown.domain.character.entity.Character;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "member_character")
public class MemberCharacter {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_character_id", nullable = false, unique = true)
    private Long id;

    @Column(nullable = false)
    private boolean isSelected;

    @Column(nullable = false)
    private boolean isLocked;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "character_id")
    private Character character;

    @Builder
    public MemberCharacter(Long id, boolean isSelected, boolean isLocked, Member member, Character character) {
        this.id = id;
        this.isSelected = isSelected;
        this.isLocked = isLocked;
        this.member = member;
        this.character = character;
    }

    public void selectOff() {
        this.isSelected = false;
    }

    public void selectOn() {
        this.isSelected = true;
    }

    public void lockOff() {
        this.isLocked = false;
    }
}
