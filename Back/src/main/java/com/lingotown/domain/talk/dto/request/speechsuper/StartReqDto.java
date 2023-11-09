package com.lingotown.domain.talk.dto.request.speechsuper;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class StartReqDto {
    private String cmd="start";
    private StartParamReqDto startParamReqDto;

    @Builder
    public StartReqDto(StartParamReqDto startParamReqDto){
        this.startParamReqDto=startParamReqDto;
    }
}
