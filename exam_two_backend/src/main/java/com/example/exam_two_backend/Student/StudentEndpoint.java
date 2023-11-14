package com.example.exam_two_backend.Student;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@RestController
@CrossOrigin

public class StudentEndpoint {
    @Autowired
    StudentService SS;

    @GetMapping("/students")
    //@CrossOrigin(origins = {"http://localhost:3000"})
    public List<Student> students () {
        System.out.println("leol");
        return SS.findstudents();
    }

    @PostMapping("/add_student")
    //@CrossOrigin(origins = {"http://localhost:3000"})
    public Student add_student (@RequestBody Student student) {
        System.out.println(student.getGrade());
        return SS.add_student(student);
    }

    @DeleteMapping("/delete_student/{id}")
    //@CrossOrigin(origins = {"http://localhost:3000"})
    public void delete_student (@PathVariable Long id) {
        System.out.println(id);
        SS.delete_student(id);
    }
}
