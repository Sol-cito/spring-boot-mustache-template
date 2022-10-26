package com.example.userproject.apicontroller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetController {
    @GetMapping(path = "/api/v1/health")
    public String checkHealth(){
        return "Success!!";
    }
}
