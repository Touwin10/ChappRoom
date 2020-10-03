package com.touwin10.chapproom.chapproomapiservice.repository;

import com.touwin10.chapproom.chapproomapiservice.model.Conversation;
import com.touwin10.chapproom.chapproomapiservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConversationRepository extends JpaRepository<Conversation, Long> {
    public List<Conversation> findAllByFromOrTo(User from, User to);
}
