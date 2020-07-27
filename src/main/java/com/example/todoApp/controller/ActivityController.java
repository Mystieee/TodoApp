package com.example.todoApp.controller;

import com.example.todoApp.model.Activity;
import com.example.todoApp.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class ActivityController {

    @Autowired
    ActivityRepository repository;


}
