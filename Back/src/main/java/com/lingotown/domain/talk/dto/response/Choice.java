package com.lingotown.domain.talk.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Choice {
    private String text;
    private Integer index;
    private String finishReason;

//    @Builder
//    public Choice(String text, Integer index, String finishReason) {
//        this.text = text;
//        this.index = index;
//        this.finishReason = finishReason;
//    }
}
