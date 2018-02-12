/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.model.inter;

import com.example.model.Informacja;
import java.util.List;
/**
 *
 * @author erdi5
 */
public interface InterInformacja {

 List<Informacja> getAll(); 
  Informacja getById(Long id);
 void add(Informacja informacja); 
 void delete(Long id); 
 void update(Informacja informacja);
}
