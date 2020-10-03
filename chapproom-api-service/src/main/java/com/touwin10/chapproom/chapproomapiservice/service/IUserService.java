package com.touwin10.chapproom.microservicechapproom.service;

import com.touwin10.chapproom.microservicechapproom.model.User;

import java.util.List;

public interface IUserService {

    public List<User> getAll();
    public User save(User user);
}
