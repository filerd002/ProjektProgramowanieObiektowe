package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.WyciagiJs;
import org.springframework.data.repository.CrudRepository;

@Repository("User_rozrachunki_Repository")
public interface User_rozrachunki_Repository extends CrudRepository<WyciagiJs, Long>{



}
