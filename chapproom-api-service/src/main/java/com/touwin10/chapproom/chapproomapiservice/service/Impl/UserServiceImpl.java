package com.touwin10.chapproom.chapproomapiservice.service.Impl;


import com.touwin10.chapproom.chapproomapiservice.exception.UserAlreadyExistsException;
import com.touwin10.chapproom.chapproomapiservice.exception.UserNotFoundException;
import com.touwin10.chapproom.chapproomapiservice.model.User;
import com.touwin10.chapproom.chapproomapiservice.model.UserProfile;
import com.touwin10.chapproom.chapproomapiservice.repository.UserRepository;
import com.touwin10.chapproom.chapproomapiservice.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserRepository repository;
    @Autowired
    private BCryptPasswordEncoder encoder;

    @Override
    public List<User> getAll() {
        return this.repository.findAllUsers();
    }

    @Override
    public User save(User user) {

        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setUsername(user.getUsername());
        newUser.setPassword(encoder.encode(user.getPassword()));

        return this.repository.save(newUser);
    }

    @Override
    public boolean updateProfile(UserProfile newProfile, String username) {
        User searchUser = repository.findUserByUsername(username);
        if(searchUser != null && searchUser.getUsername() != null){
            searchUser.setProfile(newProfile);
             repository.save(searchUser);
            return true;
        }
        return false;
    }


    @Override
    public User findUserByUsername(String username) {
        return repository.findUserByUsername(username);
    }

    @Override
    public boolean isUserExists(User user) throws UserAlreadyExistsException {

        if (user.getEmail().isEmpty() || user.getUsername().isEmpty())
            throw new UserAlreadyExistsException("User data invalid");

        if (repository.findUserByUsernameAndEmail(user.getUsername(), user.getEmail()) != null) {
            return true;
        }

        return false;
    }

    @Bean
    public BCryptPasswordEncoder encoder(){
        return new BCryptPasswordEncoder();
    }
}
