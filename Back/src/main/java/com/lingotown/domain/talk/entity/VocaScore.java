package com.lingotown.domain.talk.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "voca_score")
public class VocaScore {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "voca_score_id")
    private Long id;

    @Column(nullable = false)
    private String word;

    @Column(name = "score", nullable = false)
    private int score;

    @JoinColumn(name = "talk_detail_id")
    @ManyToOne(fetch = FetchType.LAZY )
    private TalkDetail talkDetail;

    @Builder
    public VocaScore(Long id, String word, int score, TalkDetail talkDetail) {
        this.id = id;
        this.word = word;
        this.score = score;
        this.talkDetail = talkDetail;
    }
}
