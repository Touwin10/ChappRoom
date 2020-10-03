package com.touwin10.chapproom.chapproomauthservice.service.Impl;


import com.touwin10.chapproom.chapproomauthservice.model.UserCredentials;
import com.touwin10.chapproom.chapproomauthservice.model.CustomUser;
import com.touwin10.chapproom.chapproomauthservice.proxy.UserServiceProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserServiceProxy userServiceProxy;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserCredentials userCredentials = userServiceProxy.getUserCredentialsByUsername(username);

        if (userCredentials != null && userCredentials.getUsername().equals(username)) {
            return new CustomUser(
                    userCredentials.getUsername(),
                    userCredentials.getPassword(),
                    userCredentials.getId(),
                    Collections.emptyList());
        }

        throw new UsernameNotFoundException("Username: " + username + " not found");
    }
}
