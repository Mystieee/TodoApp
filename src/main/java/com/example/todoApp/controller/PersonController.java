package com.example.todoApp.controller;

import com.example.todoApp.model.Person;
import com.example.todoApp.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class PersonController {
    @Autowired
    PersonRepository repository;

    @GetMapping("/persons")
    public List<Person> getAllPersons(){
        return repository.findAll();
    }
}
