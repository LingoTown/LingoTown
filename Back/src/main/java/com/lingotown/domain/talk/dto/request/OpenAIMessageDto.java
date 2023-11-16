package com.lingotown.domain.talk.dto.request;

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
        this.content = trimResponseContent(content);
    }

    //응답이 중간에 끊기는 것을 막는 메서드
    private String trimResponseContent(String response) {
        int startNameIndex = response.indexOf(':');
        int lastPeriodIndex = response.lastIndexOf('.');
        int lastQuestionMarkIndex = response.lastIndexOf('?');

        int cutIndex = Math.max(lastPeriodIndex, lastQuestionMarkIndex);
        if (startNameIndex != -1 && cutIndex != -1) {
            return response.substring(startNameIndex+1, cutIndex + 1);
        } else if(startNameIndex == -1 && cutIndex != -1) {
            return response.substring(0, cutIndex + 1);
        }
        return response;
    }

}
