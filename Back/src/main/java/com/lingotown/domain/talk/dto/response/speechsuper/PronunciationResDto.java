package com.lingotown.domain.talk.dto.response.speechsuper;

import lombok.*;

@Data
public class PronunciationResDto {
    private String refText;
    private ResultResDto resultResDto;
    private String error;
    private int errorId;

}
