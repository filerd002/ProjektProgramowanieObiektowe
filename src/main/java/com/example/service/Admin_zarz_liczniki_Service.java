package com.example.service;

import java.util.List;

import com.example.model.OdczytLicznika;

public interface Admin_zarz_liczniki_Service {
	
	  Iterable<OdczytLicznika> getAllAdmin_zarz_liczniki();
	 OdczytLicznika getAdmin_zarz_licznikiById(long id);
          OdczytLicznika saveAdmin_zarz_liczniki(OdczytLicznika odczytLicznika);
          void deleteAdmin_zarz_liczniki(long id);
	
}
