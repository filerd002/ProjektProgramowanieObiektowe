package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Dzialkowicz;
import org.springframework.data.repository.CrudRepository;

@Repository("Admin_zarz_user_Repository")
public interface Admin_zarz_user_Repository extends CrudRepository<Dzialkowicz, Long>{

}
