package com.lingotown.domain.talk.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
@Table(name = "sentence_score")
public class SentenceScore {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sentence_score_id")
    private Long id;

    @Column(name = "overall_score", nullable = false)
    private int overallScore;
    @Column(name = "pronunciation_score", nullable = false)
    private int pronunciationScore;

    @Column(name = "fluency_score", nullable = false)
    private int fluencyScore;

    @Column(name = "integrityScore", nullable = false)
    private int integrityScore;

    @Column(name = "rhythm_score", nullable = false)
    private int rhythmScore;

    @JoinColumn(name = "talk_detail_id")
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private TalkDetail talkDetail;


    @Builder
    public SentenceScore(int overallScore, int pronunciationScore, int fluencyScore, int rhythmScore, TalkDetail talkDetail){
        this.overallScore = overallScore;
        this.pronunciationScore = pronunciationScore;
        this.fluencyScore = fluencyScore;
        this.rhythmScore = rhythmScore;
        this.talkDetail = talkDetail;
    }
}
