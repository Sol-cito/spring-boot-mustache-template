package com.example.userproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {
    @GetMapping("/user/register")
    public String index() {
        return "user-register";
    }
}
