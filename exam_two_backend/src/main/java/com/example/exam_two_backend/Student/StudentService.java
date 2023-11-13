package com.example.exam_two_backend.Student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    public StudentRepository SR;

    @GetMapping("/students")
    @CrossOrigin(origins = {"http://localhost:3000"})
    public List<Student> students () {
        return SR.findAll();
    }

    @PostMapping("/add_student")
    @CrossOrigin(origins = {"http://localhost:3000"})
    public Student add_student (@RequestBody String name, @RequestBody String email, @RequestBody String dept, @RequestBody int grade) {
        Student m = new Student(name, email, dept, grade);
        return SR.save(m);
    }

    @DeleteMapping("/delete_student/{id}")
    @CrossOrigin(origins = {"http://localhost:3000"})
    public void delete_student (@PathVariable Long id) {
        SR.deleteById(id);
    }
}
//name, email, dept, and grade
/*
Create an API, “/students”, to get all the “Student”(s) from the database.
Create an API, “/add_student”, to add a new “Student” to the database.
The API must use the “POST” HTTP method
The input data must be in the body, NOT in the params
Create an API, “/delete_student/{id}”, to delete a “Student” from the database.
The API must use the “DELETE” HTTP method
The API will get the student ID in the path, NOT from the param or body.
 */