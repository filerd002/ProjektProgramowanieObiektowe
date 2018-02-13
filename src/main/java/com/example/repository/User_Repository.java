package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Dzialkowicz;
import org.springframework.data.repository.CrudRepository;

@Repository("User_Repository")
public interface User_Repository extends CrudRepository<Dzialkowicz, Long>{

}
