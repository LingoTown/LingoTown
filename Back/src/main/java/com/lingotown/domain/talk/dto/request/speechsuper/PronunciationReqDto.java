package com.lingotown.domain.talk.dto.request.speechsuper;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class PronunciationReqDto {
    private ConnectReqDto connect;
    private StartReqDto start;
}
