/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.model.inter;

import com.example.model.Iban;
import java.util.List;
/**
 *
 * @author erdi5
 */
public interface InterIban {

 List<Iban> getAll(); 
  Iban getById(int id);
 void add(Iban iban); 
 void delete(Long id); 
 void update(Iban iban);
}
