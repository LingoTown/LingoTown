package com.lingotown.domain.member.service;

import com.lingotown.domain.member.entity.MemberQuiz;
import com.lingotown.domain.member.repository.MemberQuizRepository;
import com.lingotown.domain.member.repository.MemberRepository;
import com.lingotown.domain.world.dto.response.ReadMemberQuizResDto;
import com.lingotown.domain.world.entity.Quiz;
import com.lingotown.domain.world.entity.World;
import com.lingotown.domain.world.repository.WorldRepository;
import com.lingotown.global.exception.CustomException;
import com.lingotown.global.exception.ExceptionStatus;
import com.lingotown.global.response.DataResponse;
import com.lingotown.global.response.ResponseStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class QuizMemberService {

    private final MemberRepository memberRepository;
    private final WorldRepository worldRepository;
    private final MemberQuizRepository memberQuizRepository;

    public DataResponse<List<ReadMemberQuizResDto>> readSolvedQuiz(Principal principal, Long worldId){
        Long memberId = Long.valueOf(principal.getName());

        World world = getWorldEntity(worldId);
        List<Quiz> quizList = world.getQuizList();

        List<ReadMemberQuizResDto> memberQuizResList = new ArrayList<>();
        for(Quiz quiz : quizList){

            Optional<MemberQuiz> memberQuiz = memberQuizRepository.findByMemberIdAndQuizId(memberId, quiz.getId());

            boolean isSolved = true;
            if(memberQuiz.isEmpty()) isSolved=false;

            ReadMemberQuizResDto memberQuizResDto = ReadMemberQuizResDto
                    .builder()
                    .quizId(quiz.getId())
                    .quiz(quiz.getQuestion())
                    .koQuiz(quiz.getKoreanQuestion())
                    .solved(isSolved)
                    .build();
            memberQuizResList.add(memberQuizResDto);
        }

        return new DataResponse<>(ResponseStatus.RESPONSE_SUCCESS.getCode(),
                ResponseStatus.RESPONSE_SUCCESS.getMessage(), memberQuizResList);
    }

    private World getWorldEntity(Long worldId){
        return worldRepository.findById(worldId)
                .orElseThrow(() -> new CustomException(ExceptionStatus.WORLD_NOT_FOUND));
    }

}
