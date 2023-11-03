package com.lingotown.domain.member.entity;

import com.lingotown.domain.world.entity.Quiz;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "member_quiz")
public class MemberQuiz {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_quiz_id")
    private Long id;

    @JoinColumn(name = "member_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    @JoinColumn(name = "quiz_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Quiz quiz;

}
