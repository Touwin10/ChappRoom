package com.touwin10.chapproom.chapproomapiservice.exception;

public class UserAlreadyExistsException extends RuntimeException{

    public UserAlreadyExistsException(String errorMessage){
        super(errorMessage);
    }
}
