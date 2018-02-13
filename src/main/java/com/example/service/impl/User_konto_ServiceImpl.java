package com.example.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Dostep;
import com.example.repository.User_konto_Repository;
import com.example.service.User_konto_Service;
import java.util.ArrayList;


@Service("User_konto_Service")
public class User_konto_ServiceImpl implements User_konto_Service {

	@Autowired
	private User_konto_Repository user_konto_Repository;

        
         @Autowired
    public void setContactRepository(User_konto_Repository user_konto_Repository) {
        this.user_konto_Repository = user_konto_Repository;
    }
        @Override
	public  Iterable<Dostep> getAllUser_konto() {
		return user_konto_Repository.findAll();
	}
       @Override
    public Dostep saveUser_konto(Dostep dostep) {
        return this.user_konto_Repository.save(dostep);
    }
   
              @Override
	public Iterable<Dostep> getUser_kontoDzialkowicz(List<Dostep> lista) {
            List<Long> listID = new ArrayList<>();
            for(Dostep item : lista){
	listID.add(item.getNrDzialkowicza());
                
            }
        Iterable<Long> iterableID =listID;

		return user_konto_Repository.findAll(iterableID);
	}
	@Override
	public Dostep getUser_kontoById(long id) {
		return user_konto_Repository.findOne(id);
	}

        
           
       
}