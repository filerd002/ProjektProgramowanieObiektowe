package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Dzialkowicz;
import com.example.repository.DzialkowiczRepository;

@Service("DzialkowiczService")
public class DzialkowiczServiceImpl implements DzialkowiczService {

	@Autowired
	private DzialkowiczRepository dzialkowiczRepository;

        
         @Autowired
    public void setContactRepository(DzialkowiczRepository dzialkowiczRepository) {
        this.dzialkowiczRepository = dzialkowiczRepository;
    }
        
        
	@Override
	public  Iterable<Dzialkowicz> getAllDzialkowicz() {
		return dzialkowiczRepository.findAll();
	}

	@Override
	public Dzialkowicz getDzialkowiczById(long id) {
		return dzialkowiczRepository.findOne(id);
	}
    
    @Override
    public Dzialkowicz saveDzialkowicz(Dzialkowicz dzialkowicz) {
        return this.dzialkowiczRepository.save(dzialkowicz);
    }
    
    @Override
    public void deleteDzialkowicz(long id) {
        this.dzialkowiczRepository.delete(id);
    }

  
}
