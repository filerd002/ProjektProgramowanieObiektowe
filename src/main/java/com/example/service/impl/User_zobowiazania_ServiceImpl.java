package com.example.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Zobowiazania;
import com.example.repository.User_zobowiazania_Repository;
import com.example.service.User_zobowiazania_Service;
import java.util.ArrayList;


@Service("User_zobowiazania_Service")
public class User_zobowiazania_ServiceImpl implements User_zobowiazania_Service {

	@Autowired
	private User_zobowiazania_Repository user_zobowiazania_Repository;

        
         @Autowired
    public void setContactRepository(User_zobowiazania_Repository user_zobowiazania_Repository) {
        this.user_zobowiazania_Repository = user_zobowiazania_Repository;
    }
        @Override
	public  Iterable<Zobowiazania> getAllUser_zobowiazania() {
		return user_zobowiazania_Repository.findAll();
	}
     
	@Override
	public Zobowiazania getUser_zobowiazaniaById(long id) {
		return user_zobowiazania_Repository.findOne(id);
	}
        
        @Override
	public Iterable<Zobowiazania> getUser_zobowiazaniaDzialka(List<Zobowiazania> lista) {
            List<Long> listID = new ArrayList<>();
            for(Zobowiazania item : lista){
	listID.add(item.getNrZobowiazania());
                
            }
        Iterable<Long> iterableID =listID;
        
        
            
           
            
		return user_zobowiazania_Repository.findAll(iterableID);
	}
}