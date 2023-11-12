package com.lingotown.domain.world.repository;

import com.lingotown.domain.world.entity.World;
import com.lingotown.global.data.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WorldRepository extends JpaRepository<World, Long> {
    List<World> findByLanguage(Language language);
}
