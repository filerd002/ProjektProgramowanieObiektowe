package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.WyciagiJs;
import org.springframework.data.repository.CrudRepository;

@Repository("Admin_zarz_wyciagiJS_Repository")
public interface Admin_zarz_wyciagiJS_Repository extends CrudRepository<WyciagiJs, Long>{

}
