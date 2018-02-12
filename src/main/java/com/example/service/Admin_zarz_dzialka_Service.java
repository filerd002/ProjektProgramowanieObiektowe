package com.example.service;

import java.util.List;

import com.example.model.Dzialki;

public interface Admin_zarz_dzialka_Service {
	
	  Iterable<Dzialki> getAllAdmin_zarz_dzialka();
	 Dzialki getAdmin_zarz_dzialkaById(long id);
          Dzialki saveAdmin_zarz_dzialka(Dzialki dzialki);
          void deleteAdmin_zarz_dzialka(long id);
	
}
