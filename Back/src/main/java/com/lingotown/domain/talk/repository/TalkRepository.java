package com.lingotown.domain.talk.repository;

import com.lingotown.domain.talk.entity.Talk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TalkRepository extends JpaRepository<Talk, Long> {

    @Query("select t from Talk t join t.memberNPC as mn where mn.id = :memberNPCId and t.deletedAt is null order by t.createdAt desc")
    List<Talk> findTalkList(@Param("memberNPCId") Long memberNPCId);
}
