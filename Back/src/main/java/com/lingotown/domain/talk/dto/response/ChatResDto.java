package com.lingotown.domain.talk.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatResDto {
    private String id;
    private String object;
    private LocalDate created;
    private String model;
    private List<Choice> choices;
}
