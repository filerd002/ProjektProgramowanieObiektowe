package com.example.service;

import java.util.List;

import com.example.model.OdczytLicznika;

public interface User_licznik_Service {
	
 Iterable<OdczytLicznika> getAllUser_licznik();
	 OdczytLicznika getUser_licznikById(long id);
 Iterable<OdczytLicznika> getUser_licznikDzialka(List<OdczytLicznika> lista);
	
}
