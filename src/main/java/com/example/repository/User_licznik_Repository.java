package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.OdczytLicznika;
import org.springframework.data.repository.CrudRepository;

@Repository("User_licznik_Repository")
public interface User_licznik_Repository extends CrudRepository<OdczytLicznika, Long>{



}
