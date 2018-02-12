package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Iban;
import org.springframework.data.repository.CrudRepository;

@Repository("Admin_zarz_bank_Repository")
public interface Admin_zarz_bank_Repository extends CrudRepository<Iban, Long>{

}
