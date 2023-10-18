package com.lingotown.domain.world.world.repository;

import com.lingotown.domain.world.world.entity.World;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WorldRepository extends JpaRepository<World, Long> {
    List<World> findByLanguage(String language);
}
