package com.lingotown.domain.member.repository;

import com.lingotown.domain.member.entity.MemberQuiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MemberQuizRepository extends JpaRepository<MemberQuiz, Long> {

    @Query("select mq from MemberQuiz mq where mq.member.id = :memberId and mq.quiz.id = :quizId")
    Optional<MemberQuiz> findByMemberIdAndQuizId(@Param("memberId") Long memberId, @Param("quizId") Long quizId);
}
