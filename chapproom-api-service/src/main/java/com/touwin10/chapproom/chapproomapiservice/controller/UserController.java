package com.touwin10.chapproom.chapproomapiservice.controller;

import com.touwin10.chapproom.chapproomapiservice.exception.UserAlreadyExistsException;
import com.touwin10.chapproom.chapproomapiservice.model.User;
import com.touwin10.chapproom.chapproomapiservice.model.UserProfile;
import com.touwin10.chapproom.chapproomapiservice.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/users")
public class UserController {

    @Autowired
    private IUserService userService;

    @GetMapping("")
    public List<User> getAll() {
        return userService.getAll();
    }

    @GetMapping("/profiles")
    public List<UserProfile> getUsersProfile(){
        return null;
    }

    @GetMapping("/{username}")
    public User getUserByName(@PathVariable(value = "username") String username) {
        return userService.findUserByUsername(username);
    }

    @PostMapping("/register")
    public boolean registerUser(@RequestBody User user) throws Exception {

        if (userService.isUserExists(user)) {
            throw new UserAlreadyExistsException("User already exists");
        }

        if (userService.save(user) != null) {
            return true;
        }
        return false;
    }

    @GetMapping("/profile/{username}")
    public UserProfile getUserProfileByUsername(@PathVariable String username) {
        User user = userService.findUserByUsername(username);
        return user.getProfile();
    }

    @PutMapping("/profile/{username}")
    public boolean updateUserProfileByUsername(@RequestBody UserProfile profile, @PathVariable String username) {
        return userService.updateProfile(profile, username);
    }

}
