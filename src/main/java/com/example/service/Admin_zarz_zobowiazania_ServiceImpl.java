package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Zobowiazania;
import com.example.repository.Admin_zarz_zobowiazania_Repository;


@Service("Admin_zarz_zobowiazania_Service")
public class Admin_zarz_zobowiazania_ServiceImpl implements Admin_zarz_zobowiazania_Service {

	@Autowired
	private Admin_zarz_zobowiazania_Repository admin_zarz_zobowiazania_Repository;

        
         @Autowired
    public void setContactRepository(Admin_zarz_zobowiazania_Repository admin_zarz_zobowiazania_Repository) {
        this.admin_zarz_zobowiazania_Repository = admin_zarz_zobowiazania_Repository;
    }
        
        
	@Override
	public  Iterable<Zobowiazania> getAllAdmin_zarz_zobowiazania() {
		return admin_zarz_zobowiazania_Repository.findAll();
	}

	@Override
	public Zobowiazania getAdmin_zarz_zobowiazaniaById(long id) {
		return admin_zarz_zobowiazania_Repository.findOne(id);
	}
    
    @Override
    public Zobowiazania saveAdmin_zarz_zobowiazania(Zobowiazania zobowiazania) {
        return this.admin_zarz_zobowiazania_Repository.save(zobowiazania);
    }
    
    @Override
    public void deleteAdmin_zarz_zobowiazania(long id) {
        this.admin_zarz_zobowiazania_Repository.delete(id);
    }

  
}
