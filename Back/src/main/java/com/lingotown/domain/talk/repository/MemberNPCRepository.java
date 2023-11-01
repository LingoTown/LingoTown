package com.lingotown.domain.talk.repository;

import com.lingotown.domain.talk.entity.MemberNPC;
import com.lingotown.domain.talk.entity.Talk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MemberNPCRepository extends JpaRepository<MemberNPC, Long> {

    @Query("select t from MemberNPC as mn join mn.talkList as t where mn.id=:memberNPCId and t.deletedAt is null")
    List<Talk> findTalkList(@Param("memberNPCId") Long memberNPCId);


    @Query("select mn from MemberNPC as mn where mn.member.id = :memberId and mn.npc.id = :npcId")
    MemberNPC findByMemberIdNPCId(@Param("memberId") Long memberId, @Param("npcId") Long npcId);
}