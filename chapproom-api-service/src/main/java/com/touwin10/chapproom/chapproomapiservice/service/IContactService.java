package com.touwin10.chapproom.chapproomapiservice.service;

import com.touwin10.chapproom.chapproomapiservice.model.Contact;

import java.util.List;

public interface IContactService {
    public List<Contact> getAll();
    public Contact save(Contact contact);
}
