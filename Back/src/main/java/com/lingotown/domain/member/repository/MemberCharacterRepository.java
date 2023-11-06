package com.lingotown.domain.member.repository;

import com.lingotown.domain.member.entity.MemberCharacter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface MemberCharacterRepository extends JpaRepository<MemberCharacter, Long> {

    @Query("select mc from MemberCharacter as mc where mc.isSelected = true and mc.member.id = :memberId")
    Optional<MemberCharacter> findSelectedCharacterByMemberId(Long memberId);

    @Query("select mc from MemberCharacter as mc where mc.member.id = :memberId")
    List<MemberCharacter> findAllByMemberId(Long memberId);

    List<MemberCharacter> findByMemberId(Long memberId);

    Optional<MemberCharacter> findByMemberIdAndCharacterId(Long memberId, Long CharacterId);
}
