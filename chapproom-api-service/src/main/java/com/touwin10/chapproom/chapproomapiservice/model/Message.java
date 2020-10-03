package com.touwin10.chapproom.chapproomapiservice.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Base64;

@Entity
@Table(name = "messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.MERGE)
    private User sender;

    @OneToOne(cascade = CascadeType.MERGE)
    private User receiver;

    @Column(columnDefinition = "boolean default false")
    private boolean hasRead;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String content;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    private byte[] image;

    private LocalDateTime time;

    private MessageType messageType = MessageType.TEXT;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    private Conversation conversation;

    @PrePersist
    public void preloadOps() {
        if (content != null && !content.isEmpty()) {
            this.time = LocalDateTime.now();
        }
        if (messageType == MessageType.IMAGE) {
            String prefix = "base64,";
            if(content.contains(prefix)){
                int index = content.indexOf(prefix) + prefix.length();
                image = Base64.getDecoder().decode(content.substring(index));
            }else{
                image = Base64.getDecoder().decode(content);
            }
            content = "";
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getSender() {
        return sender;
    }

    public void setSender(User sender) {
        this.sender = sender;
    }

    public User getReceiver() {
        return receiver;
    }

    public MessageType getMessageType() {
        return messageType;
    }

    public void setMessageType(MessageType messageType) {
        this.messageType = messageType;
    }

    public Conversation getConversation() {
        return conversation;
    }

    public void setConversation(Conversation conversation) {
        this.conversation = conversation;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public void setReceiver(User receiver) {
        this.receiver = receiver;
    }

    public boolean isHasRead() {
        return hasRead;
    }

    public void setHasRead(boolean hasRead) {
        this.hasRead = hasRead;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }
}
