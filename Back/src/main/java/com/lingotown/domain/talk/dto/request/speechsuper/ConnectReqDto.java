package com.lingotown.domain.talk.dto.request.speechsuper;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ConnectReqDto {
    private String cmd="connect";
    private ConnectParamReqDto connectParamReqDto;

    @Builder
    public ConnectReqDto(ConnectParamReqDto connectParamReqDto){
        this.connectParamReqDto = connectParamReqDto;
    }

}
