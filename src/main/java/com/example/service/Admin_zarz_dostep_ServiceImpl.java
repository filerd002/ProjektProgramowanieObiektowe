package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Dostep;
import com.example.repository.Admin_zarz_dostep_Repository;


@Service("Admin_zarz_dostep_Service")
public class Admin_zarz_dostep_ServiceImpl implements Admin_zarz_dostep_Service {

	@Autowired
	private Admin_zarz_dostep_Repository admin_zarz_dostep_Repository;

        
         @Autowired
    public void setContactRepository(Admin_zarz_dostep_Repository admin_zarz_dostep_Repository) {
        this.admin_zarz_dostep_Repository = admin_zarz_dostep_Repository;
    }
        
        
	@Override
	public  Iterable<Dostep> getAllAdmin_zarz_dostep() {
		return admin_zarz_dostep_Repository.findAll();
	}

	@Override
	public Dostep getAdmin_zarz_dostepById(long id) {
		return admin_zarz_dostep_Repository.findOne(id);
	}
    
    @Override
    public Dostep saveAdmin_zarz_dostep(Dostep dostep) {
        return this.admin_zarz_dostep_Repository.save(dostep);
    }
    
    @Override
    public void deleteAdmin_zarz_dostep(long id) {
        this.admin_zarz_dostep_Repository.delete(id);
    }

  
}
