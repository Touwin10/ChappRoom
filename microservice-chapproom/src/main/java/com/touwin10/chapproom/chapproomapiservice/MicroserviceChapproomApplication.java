package com.touwin10.chapproom.microservicechapproom;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class MicroserviceChapproomApplication {

    public static void main(String[] args) {
        SpringApplication.run(MicroserviceChapproomApplication.class, args);
    }

}
