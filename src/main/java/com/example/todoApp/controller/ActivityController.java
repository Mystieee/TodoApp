package com.example.todoApp.controller;

import com.example.todoApp.model.Activity;
import com.example.todoApp.model.Building;
import com.example.todoApp.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ActivityController {

    @Autowired
    ActivityRepository repository;

    @GetMapping("/activities")
    public List<Activity> getAllActivities() {
        return repository.findAll();
    }



}
