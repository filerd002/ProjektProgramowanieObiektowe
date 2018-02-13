package com.example.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Dzialkowicz;
import com.example.repository.Admin_zarz_user_Repository;
import com.example.service.Admin_zarz_user_Service;

@Service("Admin_zarz_user_Service")
public class Admin_zarz_user_ServiceImpl implements Admin_zarz_user_Service {

	@Autowired
	private Admin_zarz_user_Repository admin_zarz_user_Repository;

        
         @Autowired
    public void setContactRepository(Admin_zarz_user_Repository admin_zarz_user_Repository) {
        this.admin_zarz_user_Repository = admin_zarz_user_Repository;
    }
        
        
	@Override
	public  Iterable<Dzialkowicz> getAllAdmin_zarz_user() {
		return admin_zarz_user_Repository.findAll();
	}

	@Override
	public Dzialkowicz getAdmin_zarz_userById(long id) {
		return admin_zarz_user_Repository.findOne(id);
	}
    
    @Override
    public Dzialkowicz saveAdmin_zarz_user(Dzialkowicz dzialkowicz) {
        return this.admin_zarz_user_Repository.save(dzialkowicz);
    }
    
    @Override
    public void deleteAdmin_zarz_user(long id) {
        this.admin_zarz_user_Repository.delete(id);
    }

  
}
