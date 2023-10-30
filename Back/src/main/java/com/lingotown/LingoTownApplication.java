package com.lingotown;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class LingoTownApplication {

    public static void main(String[] args) {
        SpringApplication.run(LingoTownApplication.class, args);
    }

    static {
        System.setProperty("com.amazonaws.sdk.disableEc2Metadata", "true");
    }
}
