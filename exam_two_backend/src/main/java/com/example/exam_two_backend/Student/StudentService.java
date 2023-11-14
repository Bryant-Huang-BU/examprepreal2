package com.example.exam_two_backend.Student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    public StudentRepository SR;

    public List<Student> findstudents () {
        List<Student> results = SR.findAll();

        for (Student s : results) {
            System.out.println(s.getName());
        }

        return results;
    }

    public Student add_student (Student student) {
        System.out.println(student.getGrade());
        return SR.save(student);
    }

    public void delete_student (Long id) {
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