package com.lingotown.global.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ExceptionStatus {

    /**
     * code : 예외 코드 (4자리, 맨앞자리는 HTTP 상태코드를 따라감)
     * message : 예외 메시지
     */

    /* 예시 */
    EXCEPTION(-9999, "예외가 발생하였습니다."),

    /* 토큰 */
    TOKEN_EXPIRED(-1000, "토큰이 만료되었습니다."),
    TOKEN_PARSE_ERROR(4002, "JWT 토큰 파싱에 실패하였습니다."),
    REFRESH_TOKEN_EXPIRED(-1001, "리프레쉬토큰이 만료되었습니다."),
    AUTHENTICATION_FAILED(4003, "유저 인증에 실패하였습니다."),
    MEMBER_NOT_FOUND(5001, "존재하지 않는 사용자입니다."),
    MEMBER_NPC_NOT_FOUND(5002, "사용자와 NPC와의 관계가 존재하지 않습니다"),
    NPC_NOT_FOUND(5003, "NPC가 존재하지 않습니다"),
    TALK_NOT_FOUND(5004, "대화 기록이 존재하지 않습니다"),
    WORLD_NOT_FOUND(5005, "해당 국가(언어)가 존재하지 않습니다"),
    FORBIDDEN_FAILED(4003, "콘텐츠에 접근할 수 없어, 정보를 조회할 수 없습니다."),
    TOKEN_NOT_FOUND_IN_COOKIE(-1002, "토큰이 쿠키에 없습니다."),
    DATA_NOT_FOUND(5000, "데이터가 존재하지 않습니다."),
    TALK_DETAIL_NOT_FOUND(5006, "해당 문장(TALK DETAIL)이 존재하지 않습니다"),
    TOPIC_NOT_FOUND(5007, "해당 토픽이 존재하지 않습니다");

    private final int code;
    private final String message;
}
