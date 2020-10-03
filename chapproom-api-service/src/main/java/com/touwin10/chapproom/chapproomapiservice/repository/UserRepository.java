package com.touwin10.chapproom.microservicechapproom.repository;

import com.touwin10.chapproom.microservicechapproom.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
