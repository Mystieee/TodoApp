package com.example.todoApp.controller;

import com.example.todoApp.model.Building;
import com.example.todoApp.repository.BuildingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class BuildingController {

    @Autowired
    BuildingRepository repository;

    @GetMapping("/buildings")
    public List<Building> getAllBuildings() {
        return repository.findAll();
    }
}
