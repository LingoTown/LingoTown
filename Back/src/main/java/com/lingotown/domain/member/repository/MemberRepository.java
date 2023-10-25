package com.lingotown.domain.member.repository;

import com.lingotown.domain.member.entity.Member;
import com.lingotown.global.data.LoginType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByLoginIdAndLoginType(String loginId, LoginType loginType);

    @Query("SELECT m FROM Member m where m.loginId=:loginId AND m.loginType=:loginType AND m.deletedAt is null")
    Optional<Member> findByLoginIdAndLoginTypeWhereDeleteAtIsNull(@Param("loginId")String loginId, @Param("loginType")LoginType loginType);

    @Query("SELECT m FROM Member m where m.id=:userId AND m.deletedAt is null")
    Optional<Member> findByIdWhereDeleteAtIsNull(@Param("userId") Long userId);


}
