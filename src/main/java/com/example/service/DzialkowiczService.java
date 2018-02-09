package com.example.service;

import java.util.List;

import com.example.model.Dzialkowicz;

public interface DzialkowiczService {
	
	  Iterable<Dzialkowicz> getAllDzialkowicz();
	 Dzialkowicz getDzialkowiczById(long id);
          Dzialkowicz saveDzialkowicz(Dzialkowicz dzialkowicz);
          void deleteDzialkowicz(long id);
	
}
