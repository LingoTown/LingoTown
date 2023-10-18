package com.lingotown.domain.talk.service;


import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.domain.talk.dto.response.GetTalkDetailResDto;
import com.lingotown.domain.talk.entity.Talk;
import com.lingotown.domain.talk.entity.TalkDetail;
import com.lingotown.domain.talk.repository.TalkRepository;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TalkService {

    private final MemberRepository memberRepository;
    private final TalkRepository talkRepository;

    //해당 대화 detail 조회
    public List<GetTalkDetailResDto> getTalkDetail(Long talkId){
        Talk talk = getTalkEntity(talkId);

        List<GetTalkDetailResDto> talkDetailResDtoList = new ArrayList<>();

        List<TalkDetail> talkDetailList = talk.getTalkDetailList();
        for(TalkDetail talkDetail : talkDetailList){
            talkDetailResDtoList.add(GetTalkDetailResDto.of(talkDetail));
        }

        return talkDetailResDtoList;
    }


    //해당 대화 삭제
    public void deleteTalk(Long talkId){
        Talk talk = getTalkEntity(talkId);
        talk.deleteTalkHistory();

        List<TalkDetail> talkDetailList = talk.getTalkDetailList();
        for(TalkDetail talkDetail : talkDetailList) {
            talkDetail.deleteTalkDetail();
        }
    }


    private Talk getTalkEntity(Long talkId){
        Talk talk = talkRepository.findById(talkId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.TALK_NOT_FOUND));

        return talk;
    }
}
