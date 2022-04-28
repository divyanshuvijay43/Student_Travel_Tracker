package com.spe.project.Controller;

import com.spe.project.Model.Travel;
import com.spe.project.Repository.TravelRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TravelController {

    @Autowired
    private TravelRepo repo;

    @GetMapping("/travel")
    public List<Travel> getTravel() { return repo.findAll(); }

    @PostMapping("/save")
    public String saveTravel(@RequestBody Travel travel){
        repo.save(travel);
        return "travel details saved!";
    }
}
