package com.lingotown.domain.member.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SocialLoginRequestDto {
    private String code;
    private String redirect;

}
