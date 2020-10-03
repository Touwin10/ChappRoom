package com.touwin10.chapproom.chapproomapiservice.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "No such data exist")
public class UserNotFoundException extends  RuntimeException{
    public UserNotFoundException(String errorMessage){
        super(errorMessage);
    }
}
