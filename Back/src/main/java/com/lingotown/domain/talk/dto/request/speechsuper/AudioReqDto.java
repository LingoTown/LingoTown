package com.lingotown.domain.talk.dto.request.speechsuper;

import lombok.*;

@Getter
@NoArgsConstructor
@ToString
public class AudioReqDto {
    private final String audioType = "mp3";
    private final Integer channel = 1;
    private final Integer sampleBytes = 2;
    private final Integer sampleRate = 16000;
}
