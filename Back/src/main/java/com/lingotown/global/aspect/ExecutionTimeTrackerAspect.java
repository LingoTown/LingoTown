package com.lingotown.global.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;

@Aspect
@Component
public class ExecutionTimeTrackerAspect {

    private static final Logger logger = LoggerFactory.getLogger(ExecutionTimeTrackerAspect.class);

    @Around("@annotation(TrackExecutionTime)")
    public Object trackTime(ProceedingJoinPoint pjp) throws Throwable {
        StopWatch stopWatch = new StopWatch();
        stopWatch.start();

        Object obj = pjp.proceed(); // 메서드 실행

        stopWatch.stop();
        logger.info("Method: " + pjp.getSignature() + " executed in " + stopWatch.getTotalTimeMillis() + " ms");

        return obj;
    }
}
