package com.example.service;

import java.util.List;

import com.example.model.Dzialkowicz;

public interface Admin_zarz_user_Service {
	
	  Iterable<Dzialkowicz> getAllAdmin_zarz_user();
	 Dzialkowicz getAdmin_zarz_userById(long id);
          Dzialkowicz saveAdmin_zarz_user(Dzialkowicz dzialkowicz);
          void deleteAdmin_zarz_user(long id);
	
}
