package com.touwin10.chapproom.chapproomapiservice.service;

import com.touwin10.chapproom.chapproomapiservice.model.Message;

import java.util.List;

public interface IMessageService {
    public List<Message> getAll();
    public Message save(Message message);
    public void deleteById(Long id);
}
