package com.demo.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.demo.model.BookingList;

public interface BookingListService {

	ResponseEntity<List<BookingList>> getAll(int userID);

	void add(BookingList bData);

}
