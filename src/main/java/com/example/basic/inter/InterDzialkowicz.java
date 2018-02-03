/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.basic.inter;

import com.example.basic.model.Dzialkowicz;
import java.util.List;
/**
 *
 * @author erdi5
 */
public interface InterDzialkowicz {

 List<Dzialkowicz> getAll(); 
  Dzialkowicz getById(int id);
 void add(Dzialkowicz dzialkowicz); 
 void delete(Long id); 
 void update(Dzialkowicz dzialkowicz);
}
