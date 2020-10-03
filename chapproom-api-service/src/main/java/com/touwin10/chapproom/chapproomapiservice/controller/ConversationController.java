package com.touwin10.chapproom.chapproomapiservice.controller;

import com.touwin10.chapproom.chapproomapiservice.model.Conversation;
import com.touwin10.chapproom.chapproomapiservice.model.User;
import com.touwin10.chapproom.chapproomapiservice.service.IConversationService;
import com.touwin10.chapproom.chapproomapiservice.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/conversations")
public class ConversationController {

    @Autowired
    private IConversationService conversationService;
    @Autowired
    private IUserService userService;

    @PostMapping("/register")
    public Conversation registerConversation(@RequestBody Conversation conversation) {
        Conversation newCon = conversationService.save(conversation);
        return newCon;
    }

    @GetMapping("/{username}")
    public List<Conversation> getAllByUser(@PathVariable String username) {
        User user = userService.findUserByUsername(username);
        if(user != null){
            return conversationService.findAllByOwner(user);
        }
        return null;
    }
}
