package com.touwin10.chapproom.chapproomapiservice.repository;


import com.touwin10.chapproom.chapproomapiservice.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
}
