package com.lingotown.domain.member.repository;

import com.lingotown.domain.member.entity.MemberQuiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MemberQuizRepository extends JpaRepository<MemberQuiz, Long> {

//    @Query("select mq from MemberQuiz mq where mq.member.id = :memberId and mq.world.id = :worldId")
//    MemberQuiz findByMemberIdAndQuizId(@Param("memberId") Long memberId, @Param("worldId") Long worldId);
}
