package com.touwin10.chapproom.chapproomapiservice.service;

import com.touwin10.chapproom.chapproomapiservice.model.Conversation;
import com.touwin10.chapproom.chapproomapiservice.model.User;

import java.util.List;

public interface IConversationService {
    public List<Conversation> findAllByOwner(User user);
    public Conversation save(Conversation conversation);
}
