package com.lingotown.domain.talk.controller;

import com.lingotown.domain.talk.dto.request.QuizReqDto;
import com.lingotown.domain.talk.dto.request.TopicReqDto;
import com.lingotown.domain.talk.service.MemberNPCService;
import com.lingotown.domain.talk.dto.response.*;
import com.lingotown.domain.talk.dto.request.TalkReqDto;
import com.lingotown.domain.talk.service.OpenAIService;
import com.lingotown.domain.talk.service.TalkService;
import com.lingotown.global.response.CommonResponse;
import com.lingotown.global.response.DataResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/talk")
public class TalkController {

    private final TalkService talkService;
    private final OpenAIService openAIService;
    private final MemberNPCService memberNPCService;


    @PostMapping("/start/{npcId}")
    public DataResponse<CreateTalkResDto> createNPCTalkList(Principal principal, @PathVariable("npcId") Long npcId){
        return talkService.createTalk(principal, npcId);
    }

//    @PostMapping(value = "", consumes = {"multipart/form-data"})
//    public DataResponse<CreateOpenAIResDto> askGPT(Principal principal, @ModelAttribute TalkReqDto talkReqDto) throws Exception {
//        return openAIService.askGPT(principal, talkReqDto);
//    }

    @PostMapping(value = "", consumes = {"multipart/form-data"})
    public DataResponse<CreateOpenAIResDto> askGPTSync(Principal principal, @ModelAttribute TalkReqDto talkReqDto) throws Exception {
        return openAIService.askGPTSync(principal, talkReqDto);
    }

    @PostMapping("/topic")
    public DataResponse<CreateOpenAIResDto> askTopic(Principal principal, @RequestBody TopicReqDto topicReqDto) throws Exception {
        return openAIService.askTopic(principal, topicReqDto);
    }

    @PostMapping("/quiz")
    public DataResponse<QuizResDto> solveQuiz(Principal principal, @RequestBody QuizReqDto quizReqDto){
        return talkService.solveQuiz(principal, quizReqDto);
    }

    @GetMapping("/list/{npcId}")
    public DataResponse<List<ReadTalkListResDto>> readTalkList(Principal principal, @PathVariable("npcId") Long npcId){
        return talkService.readTalkList(principal, npcId);
    }

    @GetMapping("/list")
    public DataResponse<List<ReadMemberNPCResDto>> readMemberNPCList(Principal principal){
        return memberNPCService.readMemberNPCList(principal);
    }

    @GetMapping("/intimacy/list")
    public DataResponse<List<IntimacyResDto>> readMemberNPCIntimacyList(Principal principal) {

        return memberNPCService.getMemberNPCList(principal);
    }

    @GetMapping("/intimacy/{npcId}")
    public DataResponse<IntimacyResDto> readMemberNPCIntimacy(Principal principal, @PathVariable Long npcId) {

        return memberNPCService.getMemberNPC(principal, npcId);
    }

    @GetMapping("/{talkId}")
    public DataResponse<List<ReadTalkDetailResDto>> readTalkDetail(Principal principal, @PathVariable("talkId") Long talkId) {
        return talkService.readTalkDetail(principal,talkId);
    }

    @GetMapping("/detail/{talkId}")
    public DataResponse<List<ReadTalkDetailInfoResDto>> readTalkDetailList(Principal principal, @PathVariable("talkId") Long talkId) {
        return talkService.readTalkDetailList(principal,talkId);
    }

    @DeleteMapping("/{talkId}")
    public CommonResponse removeTalkList(Principal principal, @PathVariable("talkId") Long talkId) {
        return talkService.removeTalk(principal, talkId);
    }

    @PutMapping("/end/{talkId}")
    public CommonResponse increaseIntimacy(@PathVariable("talkId") Long talkId){
        return talkService.increaseIntimacy(talkId);
    }

    @GetMapping("detail/score/{talkDetailId}")
    public DataResponse<ReadPronunciationScoreResDto> readPronunciationScore(@PathVariable("talkDetailId") Long talkDetailId){
        return talkService.readPronunciationScore(talkDetailId);
    }

    @GetMapping("/score/{talkId}")
    public DataResponse<List<ReadPronunciationScoreResDto>> readPronunciationEstimation(@PathVariable("talkId") Long talkId){
        return talkService.readPronunciationEstimation(talkId);
    }

}
