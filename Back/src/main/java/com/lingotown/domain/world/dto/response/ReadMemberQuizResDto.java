package com.lingotown.domain.world.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReadMemberQuizResDto {
    private Long quizId;
    private String quiz;
    private String koQuiz;
    private boolean solved;
}
