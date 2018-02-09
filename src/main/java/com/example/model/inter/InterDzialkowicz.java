/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.model.inter;

import com.example.model.Dzialkowicz;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
/**
 *
 * @author erdi5
 */

public interface InterDzialkowicz {

 List<Dzialkowicz> getAll(); 
  Dzialkowicz getById(Long id);
 void add(Dzialkowicz dzialkowicz); 
 void delete(Long id); 
 void update(Dzialkowicz dzialkowicz);
}
