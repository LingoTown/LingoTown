package com.lingotown.domain.talk.service;


import com.lingotown.domain.membernpc.dto.response.GetTalkListResDto;
import com.lingotown.domain.membernpc.entity.MemberNPC;
import com.lingotown.domain.membernpc.repository.MemberNPCRepository;
import com.lingotown.domain.talk.dto.request.PostTalkDetailReqDto;
import com.lingotown.domain.talk.dto.response.GetTalkDetailResDto;
import com.lingotown.domain.talk.entity.Talk;
import com.lingotown.domain.talk.entity.TalkDetail;
import com.lingotown.domain.talk.repository.TalkDetailRepository;
import com.lingotown.domain.talk.repository.TalkRepository;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TalkService {

    private final TalkRepository talkRepository;
    private final TalkDetailRepository talkDetailRepository;
    private final MemberNPCRepository memberNPCRepository;

    //해당 NPC와 대화 내역
    public List<GetTalkListResDto> getTalkList(Long memberNPCId){
        getMemberNPCEntity(memberNPCId);

        List<GetTalkListResDto> talkListResDtoList = new ArrayList<>();

        List<Talk> talkList = memberNPCRepository.findAllByTalkListDeleteAtIsNullAndId(memberNPCId);
        for(Talk talk : talkList){
            talkListResDtoList.add(new GetTalkListResDto(talk.getId(), talk.getCreatedAt()));
        }

        return talkListResDtoList;
    }


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

    //NPC와 대화 시작하기
    @Transactional
    public Long postTalkList(MemberNPC memberNPC){
        Talk talk = Talk
                .builder()
                .memberNPC(memberNPC)
                .build();

        Talk savedTalk =  talkRepository.save(talk);
        return savedTalk.getId();
    }


    //NPC와 대화하기
    @Transactional
    public void PostTalkDetail(PostTalkDetailReqDto postTalkDetailReqDto){
        Long talkId = postTalkDetailReqDto.getTalkId();

        Talk talk = getTalkEntity(talkId);

        boolean isMember = postTalkDetailReqDto.isMember();
        String content = postTalkDetailReqDto.getContent();
        String talkFile = postTalkDetailReqDto.getTalkFile();

        TalkDetail talkDetail = TalkDetail
                .builder()
                .isMember(isMember)
                .content(content)
                .talkFile(talkFile)
                .talk(talk)
                .build();

        TalkDetail savedTalk = talkDetailRepository.save(talkDetail);
        System.out.println("저장됐나?" +talk.getTalkDetailList().get(0).getId());
    }

    private Talk getTalkEntity(Long talkId){
        Talk talk = talkRepository.findById(talkId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.TALK_NOT_FOUND));

        return talk;
    }

    private MemberNPC getMemberNPCEntity(Long memberNPCId){
        MemberNPC memberNPC = memberNPCRepository.findById(memberNPCId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_NPC_NOT_FOUND));

        return memberNPC;
    }

}
