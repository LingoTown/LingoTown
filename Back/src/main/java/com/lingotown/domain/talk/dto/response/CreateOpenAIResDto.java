package com.lingotown.domain.talk.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CreateOpenAIResDto {
    private String responseMessage;
    private String responseS3URL;
}
