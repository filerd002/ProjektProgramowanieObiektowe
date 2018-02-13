package com.example.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.OdczytLicznika;
import com.example.repository.Admin_zarz_liczniki_Repository;
import com.example.service.Admin_zarz_liczniki_Service;


@Service("Admin_zarz_liczniki_Service")
public class Admin_zarz_liczniki_ServiceImpl implements Admin_zarz_liczniki_Service {

	@Autowired
	private Admin_zarz_liczniki_Repository admin_zarz_liczniki_Repository;

        
         @Autowired
    public void setContactRepository(Admin_zarz_liczniki_Repository admin_zarz_liczniki_Repository) {
        this.admin_zarz_liczniki_Repository = admin_zarz_liczniki_Repository;
    }
        
        
	@Override
	public  Iterable<OdczytLicznika> getAllAdmin_zarz_liczniki() {
		return admin_zarz_liczniki_Repository.findAll();
	}

	@Override
	public OdczytLicznika getAdmin_zarz_licznikiById(long id) {
		return admin_zarz_liczniki_Repository.findOne(id);
	}
    
    @Override
    public OdczytLicznika saveAdmin_zarz_liczniki(OdczytLicznika liczniki) {
        return this.admin_zarz_liczniki_Repository.save(liczniki);
    }
    
    @Override
    public void deleteAdmin_zarz_liczniki(long id) {
        this.admin_zarz_liczniki_Repository.delete(id);
    }

  
}
