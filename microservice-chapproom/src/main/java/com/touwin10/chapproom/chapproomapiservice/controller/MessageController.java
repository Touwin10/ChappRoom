package com.touwin10.chapproom.microservicechapproom.controller;

import com.touwin10.chapproom.microservicechapproom.model.Message;
import com.touwin10.chapproom.microservicechapproom.service.IMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/messages")
public class MessageController {

    @Autowired
    private IMessageService messageService;

    @GetMapping("/")
    public List<Message> getAll(){
        return messageService.getAll();
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Integer id) {
        messageService.deleteById(id);
    }

}
