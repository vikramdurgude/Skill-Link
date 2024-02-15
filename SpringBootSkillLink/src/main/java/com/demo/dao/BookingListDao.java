package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.demo.model.BookingList;
@Repository
public interface BookingListDao extends JpaRepository<BookingList,Integer> {

	@Query(value="select*from BookingList where userid =:userID",nativeQuery=true)
	ResponseEntity<List<BookingList>> getall(int userID);
	

}
