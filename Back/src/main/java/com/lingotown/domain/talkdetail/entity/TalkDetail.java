package com.lingotown.domain.talkdetail.entity;

import com.lingotown.domain.talk.entity.Talk;
import com.lingotown.global.baseTimeEntity.BaseTimeEntity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "talk_detail")
public class TalkDetail  extends BaseTimeEntity {

    @Id
    @GeneratedValue
    @Column(name = "talk_detail_id")
    private Long id;

    @Column(nullable = false)
    private Boolean isMember;

    private String content;

    @Column(name = "talk_file", nullable = false)
    private String talkFile;

    private LocalDateTime deleteAt;

    @JoinColumn(name = "talk_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Talk talk;

}
