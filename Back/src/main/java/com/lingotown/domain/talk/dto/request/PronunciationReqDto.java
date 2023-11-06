package com.lingotown.domain.talk.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Getter
@NoArgsConstructor
public class PronunciationReqDto {
    private MultipartFile user_audio_file;
    private final String question_info = "u1/q1";
    private final Integer include_ielts_feedback = 1;

    @Builder
    public PronunciationReqDto(MultipartFile user_audio_file){
        this.user_audio_file = user_audio_file;
    }
}
