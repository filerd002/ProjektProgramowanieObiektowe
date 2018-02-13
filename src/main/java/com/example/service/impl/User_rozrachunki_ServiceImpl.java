package com.example.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.WyciagiJs;
import com.example.repository.User_rozrachunki_Repository;
import com.example.service.User_rozrachunki_Service;
import java.util.ArrayList;


@Service("User_rozrachunki_Service")
public class User_rozrachunki_ServiceImpl implements User_rozrachunki_Service {

	@Autowired
	private User_rozrachunki_Repository user_rozrachunki_Repository;

        
         @Autowired
    public void setContactRepository(User_rozrachunki_Repository user_rozrachunki_Repository) {
        this.user_rozrachunki_Repository = user_rozrachunki_Repository;
    }
        @Override
	public  Iterable<WyciagiJs> getAllUser_rozrachunki() {
		return user_rozrachunki_Repository.findAll();
	}
     
	@Override
	public WyciagiJs getUser_rozrachunkiById(long id) {
		return user_rozrachunki_Repository.findOne(id);
	}
        
        @Override
	public Iterable<WyciagiJs> getUser_rozrachunkiDzialka(List<WyciagiJs> lista) {
            List<Long> listID = new ArrayList<>();
            for(WyciagiJs item : lista){
	listID.add(item.getIdWyciagu());
                
            }
        Iterable<Long> iterableID =listID;
        
        
            
           
            
		return user_rozrachunki_Repository.findAll(iterableID);
	}
}