package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.UserDao;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserDao udao;
}
