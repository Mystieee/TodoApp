package com.example.todoApp.controller;

import com.example.todoApp.model.Building;
import com.example.todoApp.repository.BuildingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class BuildingController {

    @Autowired
    BuildingRepository repository;


    @GetMapping("/buildings")
    public List<Building> getAllBuildings() {
        return repository.findAll();
    }
}
