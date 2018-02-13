package com.example.service;

import java.util.List;

import com.example.model.Dostep;

public interface User_konto_Service {
	
 Iterable<Dostep> getAllUser_konto();
	 Dostep getUser_kontoById(long id);
    Dostep saveUser_konto(Dostep dostep);
	 Iterable<Dostep> getUser_kontoDzialkowicz(List<Dostep> lista);
      
}
