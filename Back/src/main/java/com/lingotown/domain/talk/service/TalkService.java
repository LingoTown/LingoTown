package com.lingotown.domain.talk.service;


import com.lingotown.domain.membernpc.dto.response.CreateTalkResDto;
import com.lingotown.domain.membernpc.dto.response.ReadTalkListResDto;
import com.lingotown.domain.membernpc.entity.MemberNPC;
import com.lingotown.domain.membernpc.repository.MemberNPCRepository;
import com.lingotown.domain.talk.dto.request.CreateTalkDetailReqDto;
import com.lingotown.domain.talk.dto.response.ReadTalkDetailResDto;
import com.lingotown.domain.talk.entity.Talk;
import com.lingotown.domain.talk.entity.TalkDetail;
import com.lingotown.domain.talk.repository.TalkDetailRepository;
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

    private final TalkRepository talkRepository;
    private final TalkDetailRepository talkDetailRepository;
    private final MemberNPCRepository memberNPCRepository;

    //해당 NPC와 대화 내역
    public List<ReadTalkListResDto> readTalkList(Long memberNPCId){
        getMemberNPCEntity(memberNPCId);

        List<ReadTalkListResDto> talkListResDtoList = new ArrayList<>();

        List<Talk> talkList = memberNPCRepository.findTalkList(memberNPCId);
        for(Talk talk : talkList){
            talkListResDtoList.add(new ReadTalkListResDto(talk.getId(), talk.getCreatedAt()));
        }

        return talkListResDtoList;
    }


    //해당 대화 detail 조회
    public List<ReadTalkDetailResDto> readTalkDetail(Long talkId){
        Talk talk = getTalkEntity(talkId);

        List<ReadTalkDetailResDto> talkDetailResDtoList = new ArrayList<>();

        List<TalkDetail> talkDetailList = talk.getTalkDetailList();
        for(TalkDetail talkDetail : talkDetailList){
            talkDetailResDtoList.add(ReadTalkDetailResDto.of(talkDetail));
        }

        return talkDetailResDtoList;
    }


    //해당 대화 삭제
    @Transactional
    public void removeTalk(Long talkId){
        Talk talk = getTalkEntity(talkId);

        talk.deleteTalkHistory();

        List<TalkDetail> talkDetailList = talk.getTalkDetailList();
        for(TalkDetail talkDetail : talkDetailList) {
            talkDetail.deleteTalkDetail();
        }
    }

    //NPC와 대화 시작하기
    @Transactional
    public CreateTalkResDto createTalk(MemberNPC memberNPC){
        Talk talk = Talk
                .builder()
                .memberNPC(memberNPC)
                .build();

        Talk savedTalk =  talkRepository.save(talk);
        CreateTalkResDto createTalk = new CreateTalkResDto(savedTalk.getId());

        return createTalk;
    }


    //NPC와 대화하기
    @Transactional
    public void createTalkDetail(CreateTalkDetailReqDto createTalkDetailReqDto){
        Long talkId = createTalkDetailReqDto.getTalkId();

        Talk talk = getTalkEntity(talkId);

        boolean isMember = createTalkDetailReqDto.isMember();
        String content = createTalkDetailReqDto.getContent();
        String talkFile = createTalkDetailReqDto.getTalkFile();

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
