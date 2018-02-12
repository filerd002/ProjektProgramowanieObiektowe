package com.example.service;

import java.util.List;

import com.example.model.Iban;

public interface Admin_zarz_bank_Service {
	
	  Iterable<Iban> getAllAdmin_zarz_bank();
	 Iban getAdmin_zarz_bankById(long id);
          Iban saveAdmin_zarz_bank(Iban iban);
          void deleteAdmin_zarz_bank(long id);
	
}
