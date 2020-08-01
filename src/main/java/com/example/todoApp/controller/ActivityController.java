package com.example.todoApp.controller;

import com.example.todoApp.model.Activity;
import com.example.todoApp.model.ActivityResponseBody;
import com.example.todoApp.model.Building;
import com.example.todoApp.model.Person;
import com.example.todoApp.repository.ActivityRepository;
import com.example.todoApp.repository.BuildingRepository;
import com.example.todoApp.repository.PersonRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ActivityController {

    @Autowired
    ActivityRepository activityRepository;
    @Autowired
    PersonRepository personRepository;
    @Autowired
    BuildingRepository buildingRepository;

    private final Logger log = LoggerFactory.getLogger(ActivityController.class);

    @GetMapping("/activities")
    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    @GetMapping("/activities/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable(required = true) long id){

        Optional<Activity> activity = activityRepository.findById(id);

        if(activity.isEmpty()){
            return  new ResponseEntity("Activity todo not found in Database", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(activity, HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Activity> deleteActivity(@PathVariable(required = true) long id){

        Optional<Activity> activity = activityRepository.findById(id);

        if(!activity.isPresent()){
            return  new ResponseEntity("Activity not in Database",HttpStatus.NOT_FOUND);
        }
        activityRepository.deleteById(id);
        return new ResponseEntity("Activity Deleted Successfully", HttpStatus.NO_CONTENT);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Activity> updateTask(
            @PathVariable("id") Long id,
            @RequestBody() ActivityResponseBody activityRequest
    ) {
        Optional<Person> person = Optional.empty();
        Optional<Building> building = Optional.empty();

        if (id == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Optional<Activity> activity = activityRepository.findById(id);

        if (activity.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Activity originalActivity = activity.get();

        if (activityRequest.activity_text != null && !activityRequest.activity_text.isEmpty()) {
            originalActivity.setActivity_text(activityRequest.activity_text);
        }

        if (activityRequest.person != null) {
            person = personRepository.findById(activityRequest.person.getId());

            if (person.isPresent()) {
                System.out.println("inside person present "+ person.get());
                originalActivity.setPerson(person.get());
            }
        } else {

            System.out.println("Person value nul" );
            originalActivity.setPerson(null);
        }

        if (activityRequest.building != null) {
            building = buildingRepository.findById(activityRequest.building.getId());

            if (building.isPresent()) {
                System.out.println("inside buildings present "+ building.get());
                originalActivity.setBuilding(building.get());

            }
        } else {
            originalActivity.setBuilding(null);
        }

        activityRepository.save(originalActivity);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PostMapping("/add")
    public ResponseEntity<Void> createActivity(@RequestBody() ActivityResponseBody activityRequest) {

        Optional<Person> person = Optional.empty();
        Optional<Building> building = Optional.empty();

        Activity activity = new Activity();

        if(activityRequest.getId() == -1 || activityRequest.getId()== 0){
          Long id = activityRepository.count() + 1;
          activity.setId(id);
        }

        if (activityRequest.getActivity_text() == null || activityRequest.getActivity_text().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            activity.setActivity_text(activityRequest.getActivity_text());
        }

        if (activityRequest.getPerson() != null) {
            person = personRepository.findById(activityRequest.getPerson().getId());
            if (person.isPresent()) {
                activity.setPerson(person.get());
            }
        }

        if (activityRequest.getBuilding() != null) {
            building = buildingRepository.findById(activityRequest.getBuilding().getId());
            if (building.isPresent()) {
                activity.setBuilding(building.get());
            }
        }

        activityRepository.save(activity);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(activityRequest.getId())
                .toUri();
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.setLocation(uri);

        return new ResponseEntity(activity,responseHeaders, HttpStatus.CREATED);
    }
}