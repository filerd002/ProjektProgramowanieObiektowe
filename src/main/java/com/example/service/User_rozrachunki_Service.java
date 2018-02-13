package com.example.service;

import java.util.List;

import com.example.model.WyciagiJs;

public interface User_rozrachunki_Service {
	
 Iterable<WyciagiJs> getAllUser_rozrachunki();
	 WyciagiJs getUser_rozrachunkiById(long id);
 Iterable<WyciagiJs> getUser_rozrachunkiDzialka(List<WyciagiJs> lista);
	
}
