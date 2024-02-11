package com.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.User;
import com.demo.service.UserService;

//@RequestMapping("/skilllink")
@RestController
@CrossOrigin
public class UserController {
	
	
	@Autowired
	private UserService userservice;
	
	@PostMapping("/registration")
	public ResponseEntity<?> adduser(@RequestBody User u){
			User ul =userservice.adduser(u);
		
			if(ul==null) {
				return ResponseEntity.ok("fail");
			}
			return ResponseEntity.ok("success");
	
	
	}
	
	

	
	
	@PostMapping("/login")
	public ResponseEntity<String> validate(@RequestBody User u){
		
		//System.out.println(u.getPassword());
		User login=userservice.validate(u.getUsername(),u.getPassword());
		
		if(login!=null) {
			System.out.println("success");
			return ResponseEntity.ok("success");
			
		}
		
		return ResponseEntity.ok("unsuccess");
		
	}
	@GetMapping("/getall")
	public ResponseEntity<List<User>> getAll(){
		System.out.println("inside getAll");
		List<User>ulist=userservice.getAll();
		if(ulist.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(ulist);
	}
	
//	@PostMapping("/reset")
//	public ResponseEntity<String> changePassword(@RequestBody User u){
//		System.out.println(u);
//		boolean status=userservice.changePassword(u);
//		
//		if(status)
//			return ResponseEntity.ok("success");
//		
//		return ResponseEntity.ok("User not found");
//	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
