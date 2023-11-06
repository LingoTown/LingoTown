package com.lingotown.domain.talk.dto.response.speechace;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class GrammarErrorResDto {
    private String category;
    private String message;
    private int[] span;
    private String matched_text;
    private String[] replacements;
}
