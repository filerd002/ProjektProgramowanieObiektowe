package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.OdczytLicznika;
import org.springframework.data.repository.CrudRepository;

@Repository("Admin_zarz_liczniki_Repository")
public interface Admin_zarz_liczniki_Repository extends CrudRepository<OdczytLicznika, Long>{

}
