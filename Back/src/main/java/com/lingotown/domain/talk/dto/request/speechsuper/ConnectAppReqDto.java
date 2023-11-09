package com.lingotown.domain.talk.dto.request.speechsuper;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class ConnectAppReqDto {
    private String applicationId;
    private long timestamp;
    private String sig;
}
