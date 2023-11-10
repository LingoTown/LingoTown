package com.lingotown.domain.talk.repository;

import com.lingotown.domain.talk.entity.MemberNPC;
import com.lingotown.domain.talk.entity.Talk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface MemberNPCRepository extends JpaRepository<MemberNPC, Long> {

    @Query("select t from MemberNPC as mn join mn.talkList as t where mn.id=:memberNPCId and t.deletedAt is null and t.talkDetailList.size>0")
    List<Talk> findTalkList(@Param("memberNPCId") Long memberNPCId);

    Optional<MemberNPC> findByMemberIdAndNpcId(@Param("memberId") Long memberId, @Param("npcId") Long npcId);

    List<MemberNPC> findByMemberId(Long memberId);
}