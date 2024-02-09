package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.demo.dao.UserRequirementsDao;
import com.demo.model.UserRequirements;

@Service
public class UserRequirementsServiceImpl implements UserRequirementsService {
	
	@Autowired
	private UserRequirementsDao userRequirements;

	@Override
	public void addnewservice(UserRequirements p) {
		// TODO Auto-generated method stub
		userRequirements.save(p);
	}

}
