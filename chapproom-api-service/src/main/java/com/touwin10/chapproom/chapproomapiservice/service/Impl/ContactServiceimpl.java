package com.touwin10.chapproom.microservicechapproom.service.Impl;

import com.touwin10.chapproom.microservicechapproom.model.Contact;
import com.touwin10.chapproom.microservicechapproom.repository.ContactRepository;
import com.touwin10.chapproom.microservicechapproom.service.IContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactServiceimpl implements IContactService {
    @Autowired
    private ContactRepository contactRepository;

    @Override
    public List<Contact> getAll() {
        return contactRepository.findAll();
    }

    @Override
    public Contact save(Contact contact) {
        return contactRepository.save(contact);
    }
}
