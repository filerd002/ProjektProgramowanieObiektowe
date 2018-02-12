package com.example.service;

import java.util.List;

import com.example.model.Zobowiazania;

public interface Admin_zarz_zobowiazania_Service {
	
	  Iterable<Zobowiazania> getAllAdmin_zarz_zobowiazania();
	 Zobowiazania getAdmin_zarz_zobowiazaniaById(long id);
          Zobowiazania saveAdmin_zarz_zobowiazania(Zobowiazania zobowiazania);
          void deleteAdmin_zarz_zobowiazania(long id);
	
}
