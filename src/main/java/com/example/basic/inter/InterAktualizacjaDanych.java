/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.basic.inter;

import com.example.basic.model.AktualizacjaDanych;
import java.util.List;
/**
 *
 * @author erdi5
 */
public interface InterAktualizacjaDanych {

 List<AktualizacjaDanych> getAll(); 
  AktualizacjaDanych getById(int id);
 void add(AktualizacjaDanych aktualizacjaDanych); 
 void delete(Long id); 
 void update(AktualizacjaDanych aktualizacjaDanych);
}
