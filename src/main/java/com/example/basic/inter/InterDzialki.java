/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.basic.inter;

import com.example.basic.model.Dzialki;
import java.util.List;
/**
 *
 * @author erdi5
 */
public interface InterDzialki {

 List<Dzialki> getAll(); 
  Dzialki getById(int id);
 void add(Dzialki dzialki); 
 void delete(Long id); 
 void update(Dzialki dzialki);
}
