package com.touwin10.chapproom.chapproomapiservice.model;

import javax.persistence.*;

@Entity
@Table(name = "contacts")
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

}
