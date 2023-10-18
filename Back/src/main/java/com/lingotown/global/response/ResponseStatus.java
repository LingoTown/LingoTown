package com.lingotown.global.response;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ResponseStatus {

    /* 공통 */
    RESPONSE_SUCCESS(200, "요청에 성공했습니다."),
    CREATED_SUCCESS(201, "요청에 성공되어 데이터가 생성되었습니다"),
    UPDATED_SUCCESS(201, "요청에 성공되어 데이터가 변경되었습니다"),
    DELETED_SUCCESS(201, "요청에 성공되어 데이터가 삭제되었습니다");

    private final int code;
    private final String message;
}
