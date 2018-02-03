/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.basic.inter;

import com.example.basic.model.WyciagiJs;
import java.util.List;
/**
 *
 * @author erdi5
 */
public interface InterWyciagiJS {

 List<WyciagiJs> getAll(); 
  WyciagiJs getById(int id);
 void add(WyciagiJs wyciagiJs); 
 void delete(Long id); 
 void update(WyciagiJs wyciagiJs);
}
