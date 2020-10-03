package com.touwin10.chapproom.chapproomapiservice.controller;


import com.touwin10.chapproom.chapproomapiservice.model.Message;
import com.touwin10.chapproom.chapproomapiservice.service.IMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
    @Autowired
    private SimpMessagingTemplate broker;
    @Autowired
    private IMessageService messageService;

    @MessageMapping("/sendMessageTo/{username}")
    public void send(@DestinationVariable String username, @Payload Message msg) {
        if(msg == null || msg.getSender() == null){
            return;
        }
        Message newMsg = messageService.save(msg);
        if(newMsg != null){
            this.broker.convertAndSendToUser(username, "/reply", msg);
        }
    }
}
