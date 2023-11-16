package com.lingotown.domain.talk.repository;

import com.lingotown.domain.talk.entity.TalkDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TalkDetailRepository extends JpaRepository<TalkDetail, Long> {

    @Query("select td from TalkDetail td where td.isMember is true and td.talk.id = :talkId")
    List<TalkDetail> findTalkDetailList(@Param("talkId") Long talkId);
}
