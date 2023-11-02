package com.lingotown.domain.npc.repository;

import com.lingotown.domain.npc.entity.NPC;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface NPCRepository extends JpaRepository<NPC, Long> {

}
