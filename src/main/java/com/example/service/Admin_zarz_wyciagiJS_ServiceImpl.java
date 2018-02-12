package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.WyciagiJs;
import com.example.repository.Admin_zarz_wyciagiJS_Repository;


@Service("Admin_zarz_wyciagiJS_Service")
public class Admin_zarz_wyciagiJS_ServiceImpl implements Admin_zarz_wyciagiJS_Service {

	@Autowired
	private Admin_zarz_wyciagiJS_Repository admin_zarz_wyciagiJS_Repository;

        
         @Autowired
    public void setContactRepository(Admin_zarz_wyciagiJS_Repository admin_zarz_wyciagiJS_Repository) {
        this.admin_zarz_wyciagiJS_Repository = admin_zarz_wyciagiJS_Repository;
    }
        
        
	@Override
	public  Iterable<WyciagiJs> getAllAdmin_zarz_wyciagiJS() {
		return admin_zarz_wyciagiJS_Repository.findAll();
	}

	@Override
	public WyciagiJs getAdmin_zarz_wyciagiJSById(long id) {
		return admin_zarz_wyciagiJS_Repository.findOne(id);
	}
    
    @Override
    public WyciagiJs saveAdmin_zarz_wyciagiJS(WyciagiJs wyciagiJs) {
        return this.admin_zarz_wyciagiJS_Repository.save(wyciagiJs);
    }
    
    @Override
    public void deleteAdmin_zarz_wyciagiJS(long id) {
        this.admin_zarz_wyciagiJS_Repository.delete(id);
    }

  
}
