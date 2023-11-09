package com.lingotown.domain.talk.dto.request.speechsuper;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class StartParamReqDto {

    private AppReqDto app;
    private AudioReqDto audio;
    private ScriptReqDto request;

    @Builder
    StartParamReqDto(AppReqDto app, ScriptReqDto request) {
        this.app = app;
        this.audio = new AudioReqDto();
        this.request = request;
    }

}
