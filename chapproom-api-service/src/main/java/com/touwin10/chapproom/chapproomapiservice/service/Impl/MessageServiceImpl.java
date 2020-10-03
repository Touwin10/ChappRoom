package com.touwin10.chapproom.chapproomapiservice.service.Impl;

import com.touwin10.chapproom.chapproomapiservice.model.Message;
import com.touwin10.chapproom.chapproomapiservice.repository.MessageRepository;
import com.touwin10.chapproom.chapproomapiservice.service.IMessageService;
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
    public void deleteById(Long id) {
        messageRepository.deleteById(id);
    }
}
