package com.example.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.OdczytLicznika;
import com.example.repository.User_licznik_Repository;
import com.example.service.User_licznik_Service;
import java.util.ArrayList;


@Service("User_licznik_Service")
public class User_licznik_ServiceImpl implements User_licznik_Service {

	@Autowired
	private User_licznik_Repository user_licznik_Repository;

        
         @Autowired
    public void setContactRepository(User_licznik_Repository user_licznik_Repository) {
        this.user_licznik_Repository = user_licznik_Repository;
    }
        @Override
	public  Iterable<OdczytLicznika> getAllUser_licznik() {
		return user_licznik_Repository.findAll();
	}
     
	@Override
	public OdczytLicznika getUser_licznikById(long id) {
		return user_licznik_Repository.findOne(id);
	}
        
        @Override
	public Iterable<OdczytLicznika> getUser_licznikDzialka(List<OdczytLicznika> lista) {
            List<Long> listID = new ArrayList<>();
            for(OdczytLicznika item : lista){
	listID.add(item.getIdOdczytLicznika());
                
            }
        Iterable<Long> iterableID =listID;
        
        
            
           
            
		return user_licznik_Repository.findAll(iterableID);
	}
}