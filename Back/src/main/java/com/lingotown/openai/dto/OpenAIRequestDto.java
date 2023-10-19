package com.lingotown.openai.dto;

import lombok.*;

import java.util.List;

@Getter
@NoArgsConstructor
public class OpenAIRequestDto {

    private final String model = "gpt-3.5-turbo";
    private final int max_tokens = 25;
    private final float temperature = 0.2f;
    private List<OpenAIMessageDto> messages;

    @Builder
    public OpenAIRequestDto(List<OpenAIMessageDto> messages) {
        this.messages = messages;
    }

}
