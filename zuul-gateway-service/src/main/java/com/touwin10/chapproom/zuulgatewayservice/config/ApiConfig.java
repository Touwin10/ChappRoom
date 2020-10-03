package com.touwin10.chapproom.zuulgatewayservice.config;

import org.springframework.beans.factory.annotation.Value;

public class ApiConfig {
    @Value("/api/users/register")
    private String registerUserUri;

    public String getRegisterUserUri() {
        return registerUserUri;
    }
}
