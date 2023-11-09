package com.lingotown.domain.talk.dto.response.speechsuper;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class PronunciationResDto {
    private String refText;
    private ResultResDto resultResDto;
//    private String error;
//    private int errorId;

}
