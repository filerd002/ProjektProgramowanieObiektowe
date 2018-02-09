/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.model.inter;

import com.example.model.Zobowiazania;
import java.util.List;
/**
 *
 * @author erdi5
 */
public interface InterZobowiazania {

 List<Zobowiazania> getAll(); 
  Zobowiazania getById(int id);
 void add(Zobowiazania zobowiazania); 
 void delete(Long id); 
 void update(Zobowiazania zobowiazania);
}
