package com.lingotown.domain.talk.dto.request;

import com.lingotown.domain.talk.dto.request.OpenAIMessageDto;
import lombok.*;

import java.util.List;

@Getter
@NoArgsConstructor
public class OpenAIReqDto {

    private final String model = "gpt-3.5-turbo";
    private final int max_tokens = 40;
    private final float temperature = 0.2f;
    private List<OpenAIMessageDto> messages;

    @Builder
    public OpenAIReqDto(List<OpenAIMessageDto> messages) {
        this.messages = messages;
    }

}
