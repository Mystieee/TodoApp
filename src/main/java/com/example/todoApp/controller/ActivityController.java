package com.example.todoApp.controller;

import com.example.todoApp.model.Activity;
import com.example.todoApp.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ActivityController {

    @Autowired
    ActivityRepository repository;

    @GetMapping("/activities")
    public List<Activity> getAllActivities() {
        return repository.findAll();
    }

    @GetMapping("/activities/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable(required = true) long id){

        Optional<Activity> activity = repository.findById(id);

        if(activity.isEmpty()){
            return  new ResponseEntity("Activity todo not found in Database", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(activity, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Activity> deleteActivity(@PathVariable(required = true) long id){

        Optional<Activity> activity = repository.findById(id);

        if(!activity.isPresent()){
            return  new ResponseEntity("Activity not in Database",HttpStatus.NOT_FOUND);
        }
        repository.deleteById(id);
        return new ResponseEntity("Activity Deleted Successfully", HttpStatus.NO_CONTENT);
    }

}
