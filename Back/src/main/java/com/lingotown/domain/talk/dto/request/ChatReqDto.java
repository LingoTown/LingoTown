package com.lingotown.domain.talk.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatReqDto {
    private String model;
    private List<ChatMessage> messages;
    private Boolean stream;

    ChatReqDto requestDto = ChatReqDto.builder()
            .model("gpt-3.5-turbo")
            .messages(messages)
            .stream(true)
            .build();
}