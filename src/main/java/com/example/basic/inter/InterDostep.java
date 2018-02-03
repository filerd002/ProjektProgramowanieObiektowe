/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.basic.inter;

import com.example.basic.model.Dostep;
import java.util.List;
/**
 *
 * @author erdi5
 */
public interface InterDostep {

 List<Dostep> getAll(); 
  Dostep getById(int id);
 void add(Dostep dostep); 
 void delete(Long id); 
 void update(Dostep dostep);
}
