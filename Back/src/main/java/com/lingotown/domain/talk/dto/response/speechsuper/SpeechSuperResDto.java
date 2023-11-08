package com.lingotown.domain.talk.dto.response.speechsuper;

import lombok.Data;

@Data
public class SpeechSuperResDto {
    private String tokenId;             //
    private ResultScore resultScore;    //평가한 결과
    private String refText;             //평가한 문장
}
