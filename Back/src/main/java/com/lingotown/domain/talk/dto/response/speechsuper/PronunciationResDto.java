package com.lingotown.domain.talk.dto.response.speechsuper;

import lombok.Data;

@Data
public class PronunciationResDto {
    private String tokenId;             //userId
    //private String recordId;
    //private String applicationId;
    private String errId;
    private String error;
    private String refText;             //평가한 문장
    //private ResultScore resultScore;    //평가한 결과

}
