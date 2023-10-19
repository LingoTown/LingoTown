package com.lingotown.domain.member.repository;

import com.lingotown.domain.member.entity.Member;
import com.lingotown.global.data.LoginType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByLoginIdAndLoginType(String loginId, LoginType loginType);

    @Query("SELECT user FROM Member user where user.loginId=:loginId AND user.loginType=:loginType AND user.deletedAt = null")
    Optional<Member> findByLoginIdAndLoginTypeWhereDeleteAtIsNull(@Param("loginId")String loginId, @Param("loginType")LoginType loginType);

    @Query("SELECT user FROM Member user where user.id=:userId AND user.deletedAt = null")
    Optional<Member> findByIdWhereDeleteAtIsNull(@Param("userId") Long userId);

}
