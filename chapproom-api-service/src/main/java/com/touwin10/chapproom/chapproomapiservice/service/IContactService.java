package com.touwin10.chapproom.microservicechapproom.service;

import com.touwin10.chapproom.microservicechapproom.model.Contact;

import java.util.List;

public interface IContactService {
    public List<Contact> getAll();
    public Contact save(Contact contact);
}
