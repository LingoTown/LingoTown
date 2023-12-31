package com.lingotown.domain.talk.dto.response;

import lombok.Getter;

@Getter
public class OpenAIResDto {
    private String id;
    private String object;
    private Long created;
    private String model;
    private OpenAIChoiceDto[] choices;
    private Usage usage;
}
