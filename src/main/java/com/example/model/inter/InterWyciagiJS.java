/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.model.inter;

import com.example.model.WyciagiJs;
import java.util.List;
/**
 *
 * @author erdi5
 */
public interface InterWyciagiJS {

 List<WyciagiJs> getAll(); 
  WyciagiJs getById(Long id);
 void add(WyciagiJs wyciagiJs); 
 void delete(Long id); 
 void update(WyciagiJs wyciagiJs);
}
