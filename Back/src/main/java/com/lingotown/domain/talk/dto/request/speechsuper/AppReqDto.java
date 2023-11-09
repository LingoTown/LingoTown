package com.lingotown.domain.talk.dto.request.speechsuper;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class AppReqDto {
    private String userId;
    private String applicationId;
    private long timestamp;
    private String sig;
}
