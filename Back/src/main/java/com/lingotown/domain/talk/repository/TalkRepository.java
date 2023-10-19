package com.lingotown.domain.talk.repository;

import com.lingotown.domain.membernpc.entity.MemberNPC;
import com.lingotown.domain.talk.entity.Talk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TalkRepository extends JpaRepository<Talk, Long> {

    int countByMemberNPCAndDeleteAtIsNull(MemberNPC memberNPC);

    @Query("SELECT t FROM MemberNPC mn JOIN mn.talkList t WHERE mn.id = :memberNPCId AND t.deleteAt IS NULL ORDER BY t.createdAt DESC")
    List<Talk> findTalkList(@Param("memberNPCId") Long memberNPCId);


}
