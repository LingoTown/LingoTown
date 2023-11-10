package com.lingotown.domain.talk.repository;

import com.lingotown.domain.talk.entity.SentenceScore;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SentenceScoreRepository extends JpaRepository<SentenceScore, Long> {
}
