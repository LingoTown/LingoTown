package com.lingotown.domain.talk.dto.response.speechsuper;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ErrorResponseDto {

    private ParamsDto params;
    private String recordId;
    private String applicationId;
    private Integer errId;
    private String tokenId;
    private String error;

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @ToString
    public static class ParamsDto {

        private AppDto app;
        private RequestDto request;
        private AudioDto audio;

        @Getter
        @Setter
        @NoArgsConstructor
        @AllArgsConstructor
        @ToString
        public static class AppDto {
            private String timestamp;
            private String userId;
            private String applicationId;
            private String sig;
        }

        @Getter
        @Setter
        @NoArgsConstructor
        @AllArgsConstructor
        @ToString
        public static class RequestDto {
            private String tokenId;
            private String coreType;
            private String refText;
        }

        @Getter
        @Setter
        @NoArgsConstructor
        @AllArgsConstructor
        @ToString
        public static class AudioDto {
            private Integer sampleBytes;
            private Integer sampleRate;
            private String audioType;
            private Integer channel;
        }
    }
}