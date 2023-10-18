package com.lingotown.domain.talk.talk.repository;

import com.lingotown.domain.membernpc.entity.MemberNPC;
import com.lingotown.domain.talk.talk.entity.Talk;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TalkRepository extends JpaRepository<Talk, Long> {
    int countByMemberNPCAndDeleteAtIsNull(MemberNPC memberNPC);
}
