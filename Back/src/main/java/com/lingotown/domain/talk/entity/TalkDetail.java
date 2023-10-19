package com.lingotown.domain.talk.entity;

import com.lingotown.global.baseTimeEntity.BaseTimeEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import net.bytebuddy.asm.Advice;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "talk_detail")
public class TalkDetail  extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "talk_detail_id")
    private Long id;

    @Column(nullable = false)
    private Boolean isMember;

    @Column(nullable = false)
    private String content;

    @Column(name = "talk_file", nullable = false)
    private String talkFile;

    private LocalDateTime deletedAt;

    @JoinColumn(name = "talk_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Talk talk;

    @Builder
    public TalkDetail(boolean isMember, String content, String talkFile, Talk talk){
        this.isMember = isMember;
        this.content = content;
        this.talkFile = talkFile;
        this.talk = talk;
    }

    //대화 상세 기록 삭제
    public void deleteTalkDetail(){
        this.deletedAt = LocalDateTime.now();
    }

}
