package com.lingotown.domain.talk.service;


import com.lingotown.domain.member.entity.Member;
import com.lingotown.domain.membernpc.dto.response.CreateTalkResDto;
import com.lingotown.domain.membernpc.dto.response.ReadTalkListResDto;
import com.lingotown.domain.membernpc.entity.MemberNPC;
import com.lingotown.domain.membernpc.repository.MemberNPCRepository;
import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.domain.talk.dto.request.CreateTalkDetailReqDto;
import com.lingotown.domain.talk.dto.request.IncreaseIntimacyReqDto;
import com.lingotown.domain.talk.dto.response.ReadTalkDetailResDto;
import com.lingotown.domain.talk.entity.Talk;
import com.lingotown.domain.talk.entity.TalkDetail;
import com.lingotown.domain.talk.repository.TalkDetailRepository;
import com.lingotown.domain.talk.repository.TalkRepository;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import com.lingotown.global.response.CommonResponse;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
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
    public DataResponse<List<ReadTalkListResDto>> readTalkList(Long memberNPCId){
        getMemberNPCEntity(memberNPCId);

        List<ReadTalkListResDto> talkListResDtoList = new ArrayList<>();

        List<Talk> talkList = memberNPCRepository.findTalkList(memberNPCId);
        for(Talk talk : talkList){
            ReadTalkListResDto talkListDto = ReadTalkListResDto.builder()
                    .talkId(talk.getId())
                    .talkDate(talk.getCreatedAt())
                    .build();

            talkListResDtoList.add(talkListDto);
        }

        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(),
                ResponseStatus.RESPONSE_SUCCESS.getMessage(), talkListResDtoList);
    }


    //해당 대화 detail 조회
    public DataResponse<List<ReadTalkDetailResDto>> readTalkDetail(Long talkId){
        Talk talk = getTalkEntity(talkId);

        List<ReadTalkDetailResDto> talkDetailResDtoList = new ArrayList<>();

        List<TalkDetail> talkDetailList = talk.getTalkDetailList();
        for(TalkDetail talkDetail : talkDetailList){
            talkDetailResDtoList.add(ReadTalkDetailResDto.of(talkDetail));
        }

        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(),
                ResponseStatus.RESPONSE_SUCCESS.getMessage(), talkDetailResDtoList);
    }

    //해당 대화 삭제
    @Transactional
    public CommonResponse removeTalk(Long talkId){
        Talk talk = getTalkEntity(talkId);

        talk.deleteTalkHistory();

        List<TalkDetail> talkDetailList = talk.getTalkDetailList();
        for(TalkDetail talkDetail : talkDetailList) {
            talkDetail.deleteTalkDetail();
        }

        return new CommonResponse(ResponseStatus.DELETED_SUCCESS.getCode(), ResponseStatus.DELETED_SUCCESS.getMessage());
    }

    //NPC와 대화 시작하기
    @Transactional
    public DataResponse createTalk(MemberNPC memberNPC){
        Talk talk = Talk
                .builder()
                .memberNPC(memberNPC)
                .build();

        Talk savedTalk =  talkRepository.save(talk);
        CreateTalkResDto createTalk = CreateTalkResDto
                .builder()
                .talkId(savedTalk.getId())
                .build();

        return new DataResponse(ResponseStatus.CREATED_SUCCESS.getCode(),
                ResponseStatus.CREATED_SUCCESS.getMessage(), createTalk);
    }


    //NPC와 대화하기
    @Transactional
    public CommonResponse createTalkDetail(CreateTalkDetailReqDto createTalkDetailReqDto){
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

        talkDetailRepository.save(talkDetail);
        return new CommonResponse(ResponseStatus.CREATED_SUCCESS.getCode(), ResponseStatus.CREATED_SUCCESS.getMessage());
    }

    //대화 종료 후 친밀도 변경과 리스폰 지역 설정
    @Transactional
    public CommonResponse increaseIntimacy(IncreaseIntimacyReqDto increaseIntimacyReqDto){
        Talk talk = getTalkEntity(increaseIntimacyReqDto.getTalkId());
        MemberNPC memberNPC = talk.getMemberNPC();
        NPC npc = memberNPC.getNpc();

        Member member = memberNPC.getMember();
        member.settingResponse(npc.getWorld());

        memberNPC.increaseIntimacy();
        return new CommonResponse(ResponseStatus.UPDATED_SUCCESS.getCode(), ResponseStatus.UPDATED_SUCCESS.getMessage());
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
