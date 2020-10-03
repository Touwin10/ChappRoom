package com.touwin10.chapproom.chapproomapiservice.service;

import com.touwin10.chapproom.chapproomapiservice.model.User;
import com.touwin10.chapproom.chapproomapiservice.model.UserProfile;

import java.util.List;

public interface IUserService {

    public List<User> getAll();
    public User save(User user);
    public boolean updateProfile(UserProfile profile, String username);
    public User findUserByUsername(String username);
    public boolean isUserExists(User user) throws Exception;
}
