package com.lingotown.global.aspect.executeTime;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class ExecutionTimeTrackerAspect {

    private static final Logger logger = LoggerFactory.getLogger(ExecutionTimeTrackerAspect.class);

    @Around("@annotation(TrackExecutionTime)")
    public Object trackTime(ProceedingJoinPoint pjp) throws Throwable {
        long startTime = System.currentTimeMillis();

        // 메서드 실행
        Object obj = pjp.proceed();

        long endTime = System.currentTimeMillis();
        long duration = endTime - startTime; //ms

        // 밀리초를 초로 변환
        double durationInSeconds = duration / 1000.0;

        // 커스텀 로그 메시지 생성
        logger.info(String.format("메소드: %s, 실행 시간: %d ms (%d s)", pjp.getSignature(), duration, durationInSeconds));

        return obj;
    }
}
