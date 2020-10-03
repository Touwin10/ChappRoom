package com.touwin10.chapproom.chapproomapiservice.repository;

import com.touwin10.chapproom.chapproomapiservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    public User findUserByUsername(String username);

    public User findUserByUsernameAndEmail(String username, String email);

    @Query("select new com.touwin10.chapproom.chapproomapiservice.model.User(u.id, u.username, p) from User u left join u.profile as p")
    public List<User> findAllUsers();
}
