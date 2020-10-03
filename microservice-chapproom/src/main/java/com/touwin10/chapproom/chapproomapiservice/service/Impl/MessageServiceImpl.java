package com.touwin10.chapproom.microservicechapproom.service.Impl;

import com.touwin10.chapproom.microservicechapproom.model.Message;
import com.touwin10.chapproom.microservicechapproom.repository.MessageRepository;
import com.touwin10.chapproom.microservicechapproom.service.IMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceImpl implements IMessageService {
    @Autowired
    private MessageRepository messageRepository;


    @Override
    public List<Message> getAll() {
        return messageRepository.findAll();
    }

    @Override
    public Message save(Message message) {
        return messageRepository.save(message);
    }

    @Override
    public void deleteById(Integer id) {
        messageRepository.deleteById(id);
    }
}
