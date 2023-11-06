package com.lingotown.domain.talk.dto.request;

import com.lingotown.domain.talk.dto.request.OpenAIMessageDto;
import lombok.*;

import java.util.List;

@Getter
@NoArgsConstructor
public class OpenAIReqDto {

    private final String model = "gpt-3.5-turbo";
    private int max_tokens;
    private final float temperature = 0.2f;
    private List<OpenAIMessageDto> messages;

    @Builder
    public OpenAIReqDto(int max_tokens, List<OpenAIMessageDto> messages) {
        this.max_tokens = max_tokens;
        this.messages = messages;
    }
}
