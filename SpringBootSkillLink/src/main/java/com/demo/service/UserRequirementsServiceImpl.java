package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.UserRequirementsDao;
import com.demo.model.Product;
import com.demo.model.UserRequirements;

@Service
public class UserRequirementsServiceImpl implements UserRequirementsService {
	
	@Autowired
	private UserRequirementsDao userRequirements;


	@Override
	public void addnewuserrequirement(UserRequirements u) {
		userRequirements.save(u);
		
	}


	@Override
	public List<UserRequirements> getAllService() {
		// TODO Auto-generated method stub
		return userRequirements.findAll();
	}

	
}
