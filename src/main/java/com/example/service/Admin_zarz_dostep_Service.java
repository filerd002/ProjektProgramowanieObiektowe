package com.example.service;

import java.util.List;

import com.example.model.Dostep;

public interface Admin_zarz_dostep_Service {
	
	  Iterable<Dostep> getAllAdmin_zarz_dostep();
	 Dostep getAdmin_zarz_dostepById(long id);
          Dostep saveAdmin_zarz_dostep(Dostep dostep);
          void deleteAdmin_zarz_dostep(long id);
	
}
