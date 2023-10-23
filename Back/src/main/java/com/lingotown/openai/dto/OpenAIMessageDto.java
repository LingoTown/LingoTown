package com.lingotown.openai.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class OpenAIMessageDto {

    private String role;
    private String content;

    @Builder
    public OpenAIMessageDto(String role, String content) {
        this.role = role;
        this.content = content;
    }
}
