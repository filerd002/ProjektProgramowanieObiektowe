package com.example.service;

import java.util.List;

import com.example.model.Zobowiazania;

public interface User_zobowiazania_Service {
	
 Iterable<Zobowiazania> getAllUser_zobowiazania();
	 Zobowiazania getUser_zobowiazaniaById(long id);
 Iterable<Zobowiazania> getUser_zobowiazaniaDzialka(List<Zobowiazania> lista);
	
}
