package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Dzialki;
import com.example.repository.Admin_zarz_dzialka_Repository;


@Service("Admin_zarz_dzialka_Service")
public class Admin_zarz_dzialka_ServiceImpl implements Admin_zarz_dzialka_Service {

	@Autowired
	private Admin_zarz_dzialka_Repository admin_zarz_dzialka_Repository;

        
         @Autowired
    public void setContactRepository(Admin_zarz_dzialka_Repository admin_zarz_dzialka_Repository) {
        this.admin_zarz_dzialka_Repository = admin_zarz_dzialka_Repository;
    }
        
        
	@Override
	public  Iterable<Dzialki> getAllAdmin_zarz_dzialka() {
		return admin_zarz_dzialka_Repository.findAll();
	}

	@Override
	public Dzialki getAdmin_zarz_dzialkaById(long id) {
		return admin_zarz_dzialka_Repository.findOne(id);
	}
    
    @Override
    public Dzialki saveAdmin_zarz_dzialka(Dzialki dzialki) {
        return this.admin_zarz_dzialka_Repository.save(dzialki);
    }
    
    @Override
    public void deleteAdmin_zarz_dzialka(long id) {
        this.admin_zarz_dzialka_Repository.delete(id);
    }

  
}
