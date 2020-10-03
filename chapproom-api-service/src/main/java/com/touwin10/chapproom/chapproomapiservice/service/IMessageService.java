package com.touwin10.chapproom.microservicechapproom.service;

import com.touwin10.chapproom.microservicechapproom.model.Message;

import java.util.List;

public interface IMessageService {
    public List<Message> getAll();
    public Message save(Message message);
    public void deleteById(Integer id);
}
