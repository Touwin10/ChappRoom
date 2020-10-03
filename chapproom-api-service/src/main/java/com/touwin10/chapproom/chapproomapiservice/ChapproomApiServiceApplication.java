package com.touwin10.chapproom.chapproomapiservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;


@EnableDiscoveryClient
@SpringBootApplication
public class ChapproomApiServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChapproomApiServiceApplication.class, args);
	}

}
