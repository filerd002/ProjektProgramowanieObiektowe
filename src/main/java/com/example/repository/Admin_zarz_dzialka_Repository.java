package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Dzialki;
import org.springframework.data.repository.CrudRepository;

@Repository("Admin_zarz_dzialka_Repository")
public interface Admin_zarz_dzialka_Repository extends CrudRepository<Dzialki, Long>{

}
