package com.h2database.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.h2database.model.Booking;
// An Interface when extended with crud repository does all the crud operations 
// automatically with the predefined keywords
public interface BookingRepository extends CrudRepository<Booking, Long>{
	List<Booking> findByEmail(String email);
	List<Booking> findAll();
} 