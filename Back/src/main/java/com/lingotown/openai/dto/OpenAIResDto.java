package com.lingotown.openai.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OpenAIResDto {
    private String id;
    private String object;
    private long created;
    private String model;
    private OpenAIChoiceDto[] choices;
    private Usage usage;
}
