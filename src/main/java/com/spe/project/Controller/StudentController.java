package com.spe.project.Controller;

import com.spe.project.Model.Student;
import com.spe.project.Repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class StudentController {
    Logger logger = LoggerFactory.getLogger(StudentController.class);
    
    @Autowired
    private StudentRepo repo;

    @GetMapping("/")
    public String showHomePage(){
        return "Welcome to home page!";
    }

    @GetMapping ("/students")
    public Student getStudents(@RequestHeader String id, @RequestHeader String pwd){
        Student student = repo.findByUsername(id, pwd);
        if(student.getName() == null){
            return null;
        }
        return student;
    }
    
    @GetMapping("/studentDetails")
    public List<Student> getAllStudents(){
        return repo.findAll();
    }

    @PostMapping("/register")
    public String saveStudent(@RequestBody Student student){
        repo.save(student);
        return "student registered!!";
    }
}
