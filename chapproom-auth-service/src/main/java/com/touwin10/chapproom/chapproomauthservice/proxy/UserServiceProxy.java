package com.touwin10.chapproom.chapproomauthservice.proxy;


import com.touwin10.chapproom.chapproomauthservice.model.UserCredentials;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@FeignClient(name = "chapproom-api-service")
public interface UserServiceProxy {

    @RequestMapping("/api/users/{username}")
    public UserCredentials getUserCredentialsByUsername(@PathVariable(value = "username") String username);

}
