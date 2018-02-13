package com.example.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Iban;
import com.example.repository.Admin_zarz_bank_Repository;
import com.example.service.Admin_zarz_bank_Service;


@Service("Admin_zarz_bank_Service")
public class Admin_zarz_bank_ServiceImpl implements Admin_zarz_bank_Service {

	@Autowired
	private Admin_zarz_bank_Repository admin_zarz_bank_Repository;

        
         @Autowired
    public void setContactRepository(Admin_zarz_bank_Repository admin_zarz_bank_Repository) {
        this.admin_zarz_bank_Repository = admin_zarz_bank_Repository;
    }
        
        
	@Override
	public  Iterable<Iban> getAllAdmin_zarz_bank() {
		return admin_zarz_bank_Repository.findAll();
	}

	@Override
	public Iban getAdmin_zarz_bankById(long id) {
		return admin_zarz_bank_Repository.findOne(id);
	}
    
    @Override
    public Iban saveAdmin_zarz_bank(Iban iban) {
        return this.admin_zarz_bank_Repository.save(iban);
    }
    
    @Override
    public void deleteAdmin_zarz_bank(long id) {
        this.admin_zarz_bank_Repository.delete(id);
    }

  
}
