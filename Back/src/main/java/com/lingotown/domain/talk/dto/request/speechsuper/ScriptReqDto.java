package com.lingotown.domain.talk.dto.request.speechsuper;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class ScriptReqDto {
    private String coreType;
    private String refText;
}
