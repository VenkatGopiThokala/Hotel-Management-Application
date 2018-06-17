package com.h2database.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.h2database.model.Room;

public interface RoomsRepository extends CrudRepository<Room, Long>{
	static final String FIND_ROOMS = "SELECT * FROM rooms where count > 0";
	@Query(value = FIND_ROOMS, nativeQuery = true)
	List<Room> findRooms();
} 