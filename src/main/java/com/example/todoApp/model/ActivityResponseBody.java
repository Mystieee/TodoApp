package com.example.todoApp.model;

public class ActivityResponseBody {

    public Long id;
    public String activity_text;
    public Boolean status;
    public Building building;
    public Person person;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getActivity_text() {
        return activity_text;
    }

    public void setActivity_text(String activity_text) {
        this.activity_text = activity_text;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Building getBuilding() {
        return building;
    }

    public void setBuilding(Building building) {
        this.building = building;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    @Override
    public String toString() {
        return "id: "+ id+" text: "+activity_text +"building: "+building +"person: "+person;
    }
}
