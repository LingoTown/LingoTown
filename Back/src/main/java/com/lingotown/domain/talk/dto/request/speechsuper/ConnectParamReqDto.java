package com.lingotown.domain.talk.dto.request.speechsuper;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ConnectParamReqDto {
    private SdkReqDto sdk;
    private ConnectAppReqDto app;

    @Builder
    ConnectParamReqDto(ConnectAppReqDto app) {
        this.sdk = new SdkReqDto();
        this.app = app;
    }

}
