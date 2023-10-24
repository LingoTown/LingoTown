package com.lingotown.openai.dto;

import lombok.Getter;

@Getter
public class OpenAIChoiceDto {
    private int index;
    private OpenAIMessageDto message;
    private String finishReason;
}
