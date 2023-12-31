package com.lingotown.domain.member.dto.response;

import com.lingotown.domain.member.entity.Member;
import com.lingotown.global.data.GenderType;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

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
    private LocalDateTime createdAt;

    private Long characterId;
    private GenderType characterGender;
    private String characterLink;
    private String characterImage;

    private List<CharacterLockResponseDto> lockList;

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
                .createdAt(member.getCreatedAt())
                .build();
    }
}
