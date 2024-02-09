package com.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.controller.PostMapping;
import com.demo.controller.RequestBody;
import com.demo.controller.ResponseEntity;
import com.demo.model.Product;
import com.demo.model.UserRequirements;
import com.demo.service.UserRequirementsService;

@RequestMapping("/userrequirement")
@RestController
public class UserRequirementsController {
	
	@Autowired
	private UserRequirementsService userrequirement;
	
	@PostMapping("userrequirements/{pid}")
	public ResponseEntity<String> insertProduct(@RequestBody UserRequirements p){
		userrequirement.addnewservice(p);
		return ResponseEntity.ok("data added successfully");
		
	}

}
