package com.lingotown.domain.world.dto.response;

import lombok.*;

@Getter @Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED) @AllArgsConstructor
public class ReadMemberQuizWorldResDto {

    private Long quizId;
    private String quiz;
    private String koQuiz;
    private boolean solved;
    private String theme;
}
