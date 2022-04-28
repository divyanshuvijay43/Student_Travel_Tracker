package com.spe.project.Controller;

import com.spe.project.Model.Student;
import com.spe.project.Repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class StudentController {
    @Autowired
    private StudentRepo repo;

    @GetMapping("/")
    public String showHomePage(){
        return "Welcome to home page!";
    }

    @GetMapping("/students")
    public List<Student> getStudents(){
        return repo.findAll();
    }

    @PostMapping("/register")
    public String saveStudent(@RequestBody Student student){
        repo.save(student);
        return "student registered!!";
    }
}
