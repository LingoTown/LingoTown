package com.lingotown.domain.talk.dto.response.speechsuper;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class WarnResDto {
    private int code;
    private String message;
}
