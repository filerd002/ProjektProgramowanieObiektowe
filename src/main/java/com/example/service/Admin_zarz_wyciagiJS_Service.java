package com.example.service;

import java.util.List;

import com.example.model.WyciagiJs;

public interface Admin_zarz_wyciagiJS_Service {
	
	  Iterable<WyciagiJs> getAllAdmin_zarz_wyciagiJS();
	 WyciagiJs getAdmin_zarz_wyciagiJSById(long id);
          WyciagiJs saveAdmin_zarz_wyciagiJS(WyciagiJs wyciagiJs);
          void deleteAdmin_zarz_wyciagiJS(long id);
	
}
