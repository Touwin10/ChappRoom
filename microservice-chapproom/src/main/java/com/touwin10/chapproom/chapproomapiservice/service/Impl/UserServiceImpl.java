package com.touwin10.chapproom.microservicechapproom.service.Impl;


import com.touwin10.chapproom.microservicechapproom.model.User;
import com.touwin10.chapproom.microservicechapproom.repository.UserRepository;
import com.touwin10.chapproom.microservicechapproom.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAll() {
        return this.userRepository.findAll();
    }

    @Override
    public User save(User user) {
        return this.userRepository.save(user);
    }
}
