package com.lingotown.global.papago;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PapagoRequestDto {

    private String sentence;
    private String before;
    private String after;

}
