package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Dostep;
import org.springframework.data.repository.CrudRepository;

@Repository("Admin_zarz_dostep_Repository")
public interface Admin_zarz_dostep_Repository extends CrudRepository<Dostep, Long>{

}
