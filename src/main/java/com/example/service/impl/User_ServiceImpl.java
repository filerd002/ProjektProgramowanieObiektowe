package com.example.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Dzialkowicz;
import com.example.repository.User_Repository;
import com.example.service.User_Service;


@Service("User_Service")
public class User_ServiceImpl implements User_Service {

	@Autowired
	private User_Repository user_Repository;

        
         @Autowired
    public void setContactRepository(User_Repository user_Repository) {
        this.user_Repository = user_Repository;
    }
        
     
	@Override
	public Dzialkowicz getUserById(long id) {
		return user_Repository.findOne(id);
	}
}