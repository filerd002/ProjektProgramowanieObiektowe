package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Dostep;
import org.springframework.data.repository.CrudRepository;

@Repository("User_konto_Repository")
public interface User_konto_Repository extends CrudRepository<Dostep, Long>{



}
