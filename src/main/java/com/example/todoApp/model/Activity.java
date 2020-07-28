package com.example.todoApp.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Table(name="activity")
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String activity_text;

    @Column(nullable = false)
    @ColumnDefault("false")
    private boolean status;

    @ManyToOne
    @JoinColumn(name="building_Id")
    private Building building;

    @ManyToOne
    @JoinColumn(name ="person_Id")
    private Person person;

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

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
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
}
