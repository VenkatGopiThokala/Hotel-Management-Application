package com.h2database.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.h2database.model.Users;

public interface CustomerRepository extends CrudRepository<Users, Long>{
    List<Users> findByLastName(String lastName);
    List<Users> findByEmail(String email);
} 