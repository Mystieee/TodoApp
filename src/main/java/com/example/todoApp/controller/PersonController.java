package com.example.todoApp.controller;

import com.example.todoApp.model.Person;
import com.example.todoApp.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class PersonController {
    @Autowired
    PersonRepository repository;

    @GetMapping("/persons")
    public List<Person> getAllPersons(){
        return repository.findAll();
    }
}
