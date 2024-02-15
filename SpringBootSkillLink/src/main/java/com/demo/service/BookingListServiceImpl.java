package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.demo.dao.BookingListDao;
import com.demo.model.BookingList;
@Service
public class BookingListServiceImpl implements BookingListService {
	
	@Autowired
	private BookingListDao bookdao;
	
	@Override
	public ResponseEntity<List<BookingList>> getAll(int userID) {
		// TODO Auto-generated method stub
		return bookdao.getall(userID);
	}

	@Override
	public void add(BookingList bData) {
		// TODO Auto-generated method stub
		bookdao.save(bData);
	}

	

	

	

	
		
}
