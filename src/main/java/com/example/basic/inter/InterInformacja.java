/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.basic.inter;

import com.example.basic.model.Informacja;
import java.util.List;
/**
 *
 * @author erdi5
 */
public interface InterInformacja {

 List<Informacja> getAll(); 
  Informacja getById(int id);
 void add(Informacja informacja); 
 void delete(Long id); 
 void update(Informacja informacja);
}
