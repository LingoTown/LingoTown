//package com.lingotown.global.exception;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.lingotown.global.response.CommonResponse;
//import org.springframework.stereotype.Component;
//
//@Component
//public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {
//
//    @Override
//    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {
//        response.setContentType("application/json");
//        response.setCharacterEncoding("UTF-8");
//        response.setStatus(401);
//
//        ObjectMapper objectMapper = new ObjectMapper();
//
//        CommonResponse commonResponse = new CommonResponse();
//
//        commonResponse.setCode(ExceptionStatus.TOKEN_EXPIRED.getCode());
//        commonResponse.setMessage(ExceptionStatus.TOKEN_EXPIRED.getMessage());
//
//        objectMapper.writeValue(response.getWriter(), commonResponse);
//    }
//}
