package com.lingotown.domain.character.repository;

import com.lingotown.domain.character.entity.Character;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterRepository extends JpaRepository<Character, Long> {
}
