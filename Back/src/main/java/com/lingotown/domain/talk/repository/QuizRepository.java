package com.lingotown.domain.talk.repository;

import com.lingotown.domain.world.entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

    //@Query("select q from Quiz q where q.")
}
