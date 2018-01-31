/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.basic.inter;

import com.example.basic.model.OdczytLicznika;
import java.util.List;
/**
 *
 * @author erdi5
 */
public interface InterOdczytLicznika {

 List<OdczytLicznika> getAll(); 
  OdczytLicznika getById(int id);
 void add(OdczytLicznika odczytLicznika); 
 void delete(Long id); 
 void update(OdczytLicznika odczytLicznika);
}
