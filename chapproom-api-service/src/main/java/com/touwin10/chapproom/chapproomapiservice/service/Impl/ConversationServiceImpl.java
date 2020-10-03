package com.touwin10.chapproom.chapproomapiservice.service.Impl;

import com.touwin10.chapproom.chapproomapiservice.model.Conversation;
import com.touwin10.chapproom.chapproomapiservice.model.User;
import com.touwin10.chapproom.chapproomapiservice.repository.ConversationRepository;
import com.touwin10.chapproom.chapproomapiservice.service.IConversationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConversationServiceImpl implements IConversationService {
    @Autowired
    private ConversationRepository repository;

    @Override
    public List<Conversation> findAllByOwner(User user) {
        return repository.findAllByFromOrTo(user, user);
    }

    @Override
    public Conversation save(Conversation conversation) {
        return repository.save(conversation);
    }
}
