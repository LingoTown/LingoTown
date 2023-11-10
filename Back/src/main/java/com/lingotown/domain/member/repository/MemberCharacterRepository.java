package com.lingotown.domain.member.repository;

import com.lingotown.domain.member.entity.MemberCharacter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface MemberCharacterRepository extends JpaRepository<MemberCharacter, Long> {

    @Query("select mc from MemberCharacter as mc where mc.isSelected = true and mc.member.id = :memberId")
    Optional<MemberCharacter> findSelectedCharacterByMemberId(Long memberId);

    List<MemberCharacter> findByMemberId(Long memberId);

    Optional<MemberCharacter> findByMemberIdAndCharacterId(@Param("memberId") Long memberId, @Param("characterId")Long CharacterId);
}
