package com.demo.controllers;


import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import com.demo.service.UserService;



@RestController
@RequestMapping("/")
public class UserControllers {
	@Autowired
	private UserService pservice;
	
	
	
}
