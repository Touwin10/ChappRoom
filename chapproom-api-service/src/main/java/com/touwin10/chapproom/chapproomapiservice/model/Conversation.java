package com.touwin10.chapproom.chapproomapiservice.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "conversations")
public class Conversation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.MERGE)
    private User from;

    @OneToOne(cascade = CascadeType.MERGE)
    private User to;

    @OneToMany(mappedBy = "conversation", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Message> messages;

    @OneToOne(cascade = CascadeType.ALL)
    private Message lastMessage;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getFrom() {
        return from;
    }

    public void setFrom(User from) {
        this.from = from;
    }

    public User getTo() {
        return to;
    }

    public void setTo(User to) {
        this.to = to;
    }

    public List<Message> getMessages() {
        if (messages == null){
            return new ArrayList<>();
        }
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }

    public Message getLastMessage() {
        if (messages != null && messages.size() > 0) {
            lastMessage = messages.get(messages.size() - 1);
            return lastMessage;
        }
        return new Message();
    }

    public void setLastMessage(Message lastMessage) {
        this.lastMessage = lastMessage;
    }
}
