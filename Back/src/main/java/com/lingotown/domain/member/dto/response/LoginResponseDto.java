package com.lingotown.domain.member.dto.response;

import com.lingotown.domain.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoginResponseDto {

    private String accessToken;
    private String refreshToken;
    private String email;
    private String gender;
    private String social;
    private String nickname;
    private String profileImg;

    public static LoginResponseDto of(Member member, String accessToken, String refreshToken) {
        return LoginResponseDto
                .builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .email(member.getEmail())
                .gender(member.getGenderType().toString())
                .social(member.getLoginType().toString())
                .nickname(member.getNickname())
                .profileImg(member.getProfile())
                .build();
    }

}
