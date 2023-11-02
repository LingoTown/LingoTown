package com.lingotown.domain.talk.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Getter
@NoArgsConstructor
public class PronunciationReqDto {
    private String text;
    private MultipartFile user_audio_file;
    private String question_info = "u1/q1";
    private Integer no_mc = 1;

    @Builder
    public PronunciationReqDto(String text, MultipartFile user_audio_file){
        this.text = text;
        this.user_audio_file = user_audio_file;
    }
}
