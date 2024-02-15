package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.BookingList;
import com.demo.model.ServiceProvider;
import com.demo.model.User;
import com.demo.service.BookingListService;

@RequestMapping("/bookingList")
@RestController
@CrossOrigin
public class BookingListController {
		@Autowired
		private BookingListService bookingListserv;
		
		
		
		
		@GetMapping("/getall/{userID}")
		public ResponseEntity<List<BookingList>> getAll(@PathVariable int userID){
			
			return bookingListserv.getAll(userID);
		}
		
		
		
		@PostMapping("/addData")
		public ResponseEntity<?> adduser(@RequestBody BookingList bData){
			System.out.println(bData.toString());
				bookingListserv.add(bData);
				
				
				return ResponseEntity.ok("success");
		}
}

