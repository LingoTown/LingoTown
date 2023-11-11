package com.lingotown.domain.talk.service;


import com.lingotown.domain.member.entity.Member;
import com.lingotown.domain.member.entity.MemberQuiz;
import com.lingotown.domain.member.repository.MemberQuizRepository;
import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.domain.talk.dto.request.CreateTalkDetailReqDto;
import com.lingotown.domain.talk.dto.request.QuizReqDto;
import com.lingotown.domain.talk.dto.request.TalkReqDto;
import com.lingotown.domain.talk.dto.response.*;
import com.lingotown.domain.talk.entity.*;
import com.lingotown.domain.talk.repository.*;
import com.lingotown.domain.npc.dto.response.ReadTopicResDto;
import com.lingotown.domain.npc.service.NPCService;
import com.lingotown.domain.world.entity.Quiz;
import com.lingotown.domain.world.entity.World;
import com.lingotown.domain.world.repository.QuizRepository;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import com.lingotown.global.response.CommonResponse;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import com.lingotown.global.service.CacheService;
import com.lingotown.global.service.S3Service;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TalkService {

    private final CacheService cacheService;
    private final NPCService npcService;
    private final S3Service s3Service;
    private final MemberNPCService memberNPCService;

    private final MemberRepository memberRepository;
    private final TalkRepository talkRepository;
    private final TalkDetailRepository talkDetailRepository;
    private final MemberNPCRepository memberNpcRepository;
    private final QuizRepository quizRepository;
    private final MemberQuizRepository memberQuizRepository;

    //해당 NPC와 대화 내역
    public DataResponse<List<ReadTalkListResDto>> readTalkList(Principal principal, Long npcId){
        Long logInMemberId = Long.valueOf(principal.getName());
        MemberNPC memberNPC = memberNpcRepository.findByMemberIdAndNpcId(logInMemberId, npcId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_NPC_NOT_FOUND));

        Long memberId = memberNPC.getMember().getId();
        if(!memberId.equals(logInMemberId)) throw new CustomException(ExceptionStatus.FORBIDDEN_FAILED);

        List<ReadTalkListResDto> talkListResDtoList = new ArrayList<>();

        Long memberNPCId = memberNPC.getId();
        List<Talk> talkList = memberNpcRepository.findTalkList(memberNPCId);
        for(Talk talk : talkList){
            List<TalkDetail> talkDetailList = talk.getTalkDetailList();
            if(talkDetailList.size()<=0) continue;

            ReadTalkListResDto talkListDto = ReadTalkListResDto
                    .builder()
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

    //NPC와 대화 시작하기
    @Transactional
    public DataResponse<CreateTalkResDto> createTalk(Principal principal, Long npcId){
        MemberNPC memberNPC = memberNPCService.createMemberNPCConnect(principal, npcId);

        Talk talk = Talk
                .builder()
                .memberNPC(memberNPC)
                .build();

        Talk savedTalk =  talkRepository.save(talk);

        List<ReadTopicResDto> topicResDtoList = npcService.readNPCTopicList(npcId).getData();

        CreateTalkResDto createTalk = CreateTalkResDto
                .builder()
                .talkId(savedTalk.getId())
                .npcId(npcId)
                .topicList(topicResDtoList)
                .build();

        return new DataResponse<>(ResponseStatus.CREATED_SUCCESS.getCode(),
                ResponseStatus.CREATED_SUCCESS.getMessage(), createTalk);
    }

    //NPC와 대화하기
    public DataResponse<TalkDetail> createTalkDetail(CreateTalkDetailReqDto createTalkDetailReqDto) throws IOException {
        Long talkId = createTalkDetailReqDto.getTalkId();
        Talk talk = getTalkEntity(talkId);

        boolean isMember = createTalkDetailReqDto.isMember();
        String content = createTalkDetailReqDto.getContent();
        MultipartFile talkFile = createTalkDetailReqDto.getTalkFile();

        String fileUrl = s3Service.uploadFile(talkFile);

        TalkDetail talkDetail = TalkDetail
                .builder()
                .isMember(isMember)
                .content(content)
                .talkFile(fileUrl)
                .talk(talk)
                .grammarAdvise(null)
                .build();

        return new DataResponse<>(ResponseStatus.DELETED_SUCCESS.getCode(),
                ResponseStatus.DELETED_SUCCESS.getMessage(), talkDetail);
    }

    //퀴즈 풀이
    @Transactional
    public DataResponse<QuizResDto> solveQuiz(Principal principal, QuizReqDto quizReqDto){
        boolean result = false;

        Long quizId = quizReqDto.getQuizId();
        Quiz quiz = quizRepository.findById(quizId)
                .orElseThrow(()-> new CustomException(ExceptionStatus.QUIZ_NOT_FOUND));

        String answer = quiz.getAnswer();

        if(answer.equals(quizReqDto.getResult())) {
            result = true;

            Long memberId = Long.valueOf(principal.getName());
            Member member = getMemberEntity(memberId);

            Optional<MemberQuiz> isSolvedQuiz = memberQuizRepository.findByMemberIdAndQuizId(memberId, quizId);
            if(isSolvedQuiz.isEmpty()) {
                MemberQuiz memberQuiz = MemberQuiz
                        .builder()
                        .member(member)
                        .quiz(quiz)
                        .build();

                memberQuizRepository.save(memberQuiz);
            }
        }

        QuizResDto quizResDto = QuizResDto
                .builder()
                .result(result)
                .build();

        return new DataResponse<>(ResponseStatus.CREATED_SUCCESS.getCode(),
                ResponseStatus.CREATED_SUCCESS.getMessage(), quizResDto);
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



    //대화 종료 후 친밀도 변경과 캐시 삭제
    @Transactional
    public CommonResponse increaseIntimacy(Long talkId){
        Talk talk = getTalkEntity(talkId);
        int talkCount = talk.getTalkDetailList().size();
        log.info("증가하는 친밀도 : " + talkCount);

        MemberNPC memberNPC = talk.getMemberNPC();
        memberNPC.increaseIntimacy(talkCount);

        cacheService.deleteTalkData(talkId);
        return new CommonResponse(ResponseStatus.UPDATED_SUCCESS.getCode(), ResponseStatus.UPDATED_SUCCESS.getMessage());
    }

    //대화 기록에서 발음평가 조회하기
    public DataResponse<ReadPronunciationScoreResDto> readPronunciationScore(Long talkDetailId){
        TalkDetail talkDetail = getTalkDetailEntity(talkDetailId);
        List<VocaScore> vocaScoreList = talkDetail.getVocaScoreList();

        List<ReadWordScoreResDto> vocaScoreResList = new ArrayList<>();
        for(VocaScore vocaScore : vocaScoreList){
                ReadWordScoreResDto readWordScoreResDto = ReadWordScoreResDto.builder()
                        .word(vocaScore.getWord())
                        .score(vocaScore.getScore())
                        .build();

                vocaScoreResList.add(readWordScoreResDto);
        }

        SentenceScore sentenceScore = talkDetail.getSentenceScore();
        ReadPronunciationScoreResDto pronunciationScoreDto = ReadPronunciationScoreResDto.builder()
                .overallScore(sentenceScore.getOverallScore())
                .pronunciationScore(sentenceScore.getPronunciationScore())
                .fluencyScore(sentenceScore.getFluencyScore())
                .integrityScore(sentenceScore.getIntegrityScore())
                .wordScoreList(vocaScoreResList)
                .rhythmScore(sentenceScore.getRhythmScore())
                .build();

        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(),
                ResponseStatus.RESPONSE_SUCCESS.getMessage(), pronunciationScoreDto);
    }


    //전체 대화 기록에서 발음 평가 조회하기
    public DataResponse<List<ReadPronunciationScoreResDto>> readPronunciationEstimation(Long talkId){
        List<TalkDetail> talkDetailList = talkDetailRepository.findTalkDetailList(talkId);

        List<ReadPronunciationScoreResDto> pronunciationScoreList = new ArrayList<>();
        for(TalkDetail talkDetail : talkDetailList){
            List<ReadWordScoreResDto> vocaScoreResList = new ArrayList<>();

            List<VocaScore> vocaScoreList = talkDetail.getVocaScoreList();
            for(VocaScore vocaScore : vocaScoreList){
                ReadWordScoreResDto readWordScoreResDto = ReadWordScoreResDto.builder()
                        .word(vocaScore.getWord())
                        .score(vocaScore.getScore())
                        .build();

                vocaScoreResList.add(readWordScoreResDto);
            }

            SentenceScore sentenceScore = talkDetail.getSentenceScore();
            ReadPronunciationScoreResDto pronunciationScoreDto = ReadPronunciationScoreResDto.builder()
                    .talkDetailId(talkDetail.getId())
                    .overallScore(sentenceScore.getOverallScore())
                    .pronunciationScore(sentenceScore.getPronunciationScore())
                    .fluencyScore(sentenceScore.getFluencyScore())
                    .integrityScore(sentenceScore.getIntegrityScore())
                    .wordScoreList(vocaScoreResList)
                    .rhythmScore(sentenceScore.getRhythmScore())
                    .build();

            pronunciationScoreList.add(pronunciationScoreDto);
        }


        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(),
                ResponseStatus.RESPONSE_SUCCESS.getMessage(), pronunciationScoreList);
    }

    private Talk getTalkEntity(Long talkId){
        return talkRepository.findById(talkId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.TALK_NOT_FOUND));
    }

    private Member getMemberEntity(Long memberId){
        return memberRepository.findById(memberId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.MEMBER_NOT_FOUND));
    }

    private TalkDetail getTalkDetailEntity(Long talkDetailId){
        return talkDetailRepository.findById(talkDetailId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.TALK_DETAIL_NOT_FOUND));
    }

}
