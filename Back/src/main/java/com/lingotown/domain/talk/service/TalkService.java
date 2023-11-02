package com.lingotown.domain.talk.service;


import com.lingotown.domain.member.entity.Member;
import com.lingotown.domain.npc.repository.NPCRepository;
import com.lingotown.domain.talk.dto.request.CreateTalkDetailReqDto;
import com.lingotown.domain.talk.dto.response.CreateTalkResDto;
import com.lingotown.domain.talk.dto.response.ReadTalkListResDto;
import com.lingotown.domain.talk.entity.MemberNPC;
import com.lingotown.domain.talk.repository.MemberNPCRepository;
import com.lingotown.domain.npc.dto.response.ReadTopicResDto;
import com.lingotown.domain.npc.entity.NPC;
import com.lingotown.domain.npc.service.NPCService;
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
import com.lingotown.global.service.CacheService;
import com.lingotown.global.service.S3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TalkService {

    private final CacheService cacheService;
    private final NPCService npcService;
    private final S3Service s3Service;
    private final TalkRepository talkRepository;
    private final TalkDetailRepository talkDetailRepository;
    private final MemberNPCRepository memberNpcRepository;

    //해당 NPC와 대화 내역
    public DataResponse<List<ReadTalkListResDto>> readTalkList(Principal principal, Long npcId){
        Long logInMemberId = Long.valueOf(principal.getName());
        MemberNPC memberNPC = memberNpcRepository.findByMemberIdNPCId(logInMemberId, npcId);

        Long memberId = memberNPC.getMember().getId();
        if(!memberId.equals(logInMemberId)) throw new CustomException(ExceptionStatus.FORBIDDEN_FAILED);

        List<ReadTalkListResDto> talkListResDtoList = new ArrayList<>();

        Long memberNPCId = memberNPC.getId();
        List<Talk> talkList = memberNpcRepository.findTalkList(memberNPCId);
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
    public DataResponse<List<ReadTalkDetailResDto>> readTalkDetail(Principal principal, Long talkId){
        Talk talk = getTalkEntity(talkId);

        Long memberId = talk.getMemberNPC().getMember().getId();
        Long logInMemberId = Long.valueOf(principal.getName());
        if(!memberId.equals(logInMemberId)) throw new CustomException(ExceptionStatus.FORBIDDEN_FAILED);

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
    public CommonResponse removeTalk(Principal principal, Long talkId){
        Talk talk = getTalkEntity(talkId);

        Long memberId = talk.getMemberNPC().getMember().getId();
        Long logInMemberId = Long.valueOf(principal.getName());
        if(!memberId.equals(logInMemberId)) throw new CustomException(ExceptionStatus.FORBIDDEN_FAILED);

        talk.deleteTalkHistory();

        List<TalkDetail> talkDetailList = talk.getTalkDetailList();
        for(TalkDetail talkDetail : talkDetailList) {
            talkDetail.deleteTalkDetail();
        }

        return new CommonResponse(ResponseStatus.DELETED_SUCCESS.getCode(),
                ResponseStatus.DELETED_SUCCESS.getMessage());
    }

    //NPC와 대화 시작하기
    @Transactional
    public DataResponse<CreateTalkResDto> createTalk(MemberNPC memberNPC){
        Talk talk = Talk
                .builder()
                .memberNPC(memberNPC)
                .build();

        Talk savedTalk =  talkRepository.save(talk);

        Long npcId = talk.getMemberNPC().getNpc().getId();
        List<ReadTopicResDto> topicResDtoList = npcService.readNPCTopicList(npcId).getData();

        CreateTalkResDto createTalk = CreateTalkResDto
                .builder()
                .talkId(savedTalk.getId())
                .npcId(npcId)
                .topicList(topicResDtoList)
                .build();

        return new DataResponse(ResponseStatus.CREATED_SUCCESS.getCode(),
                ResponseStatus.CREATED_SUCCESS.getMessage(), createTalk);
    }

    //NPC와 대화하기
    @Transactional
    public DataResponse<TalkDetail> createTalkDetail(CreateTalkDetailReqDto createTalkDetailReqDto) throws IOException {
        Long talkId = createTalkDetailReqDto.getTalkId();
        Talk talk = getTalkEntity(talkId);

        boolean isMember = createTalkDetailReqDto.isMember();
        String content = createTalkDetailReqDto.getContent();
        MultipartFile talkFile = createTalkDetailReqDto.getTalkFile();

        System.out.println("talkFile : " +talkFile);
        String fileUrl = s3Service.uploadFile(talkFile);

        TalkDetail talkDetail = TalkDetail
                .builder()
                .isMember(isMember)
                .content(content)
                .talkFile(fileUrl)
                .talk(talk)
                .grammarAdvise(null)
                .build();

        TalkDetail savedTalkDetail = talkDetailRepository.save(talkDetail);

        return new DataResponse<>(ResponseStatus.DELETED_SUCCESS.getCode(),
                ResponseStatus.DELETED_SUCCESS.getMessage(), savedTalkDetail);
    }

    //대화 종료 후 친밀도 변경과 리스폰 지역 설정, 캐시 삭제
    @Transactional
    public CommonResponse increaseIntimacy(IncreaseIntimacyReqDto increaseIntimacyReqDto){
        Talk talk = getTalkEntity(increaseIntimacyReqDto.getTalkId());
        MemberNPC memberNPC = talk.getMemberNPC();
        NPC npc = memberNPC.getNpc();

        Member member = memberNPC.getMember();
        member.settingResponse(npc.getWorld());

        memberNPC.increaseIntimacy();

        cacheService.deleteTalkData(increaseIntimacyReqDto.getTalkId());

        return new CommonResponse(ResponseStatus.UPDATED_SUCCESS.getCode(), ResponseStatus.UPDATED_SUCCESS.getMessage());
    }


    private Talk getTalkEntity(Long talkId){
        return talkRepository.findById(talkId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.TALK_NOT_FOUND));
    }

}
