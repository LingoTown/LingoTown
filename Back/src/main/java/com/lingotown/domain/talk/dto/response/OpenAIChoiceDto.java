package com.lingotown.domain.talk.dto.response;

import com.lingotown.domain.talk.dto.request.OpenAIMessageDto;
import lombok.Getter;

@Getter
public class OpenAIChoiceDto {
    private int index;
    private OpenAIMessageDto message;
    private String finishReason;
}
