package com.lingotown.domain.talk.dto.response;

import lombok.Getter;

@Getter
public class Usage {
    private int prompt_tokens;
    private int completion_tokens;
    private int total_tokens;
}
