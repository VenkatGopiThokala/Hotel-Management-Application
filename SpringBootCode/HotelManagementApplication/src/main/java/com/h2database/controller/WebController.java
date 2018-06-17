package com.h2database.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.h2database.model.Users;
import com.h2database.model.Booking;
import com.h2database.model.Room;
import com.h2database.repository.BookingRepository;
import com.h2database.repository.CustomerRepository;
import com.h2database.repository.RoomsRepository;

@RestController // This is mandatory to define this class as a controller
public class WebController {
	// Autowired should be kept for every repository defined, as done below
	// to make use of CRUD operations
	@Autowired
	CustomerRepository CustRepository;
	@Autowired
	RoomsRepository RoomRepository;
	@Autowired
	BookingRepository BookingRepository;

	// Service for creating an user
	@RequestMapping("/api/createUser")
	public String process(@RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName,
			@RequestParam("email") String email, @RequestParam("password") String password,
			@RequestParam("city") String city, @RequestParam("address") String address,
			@RequestParam("contact") Long contact) {
		CustRepository.save(new Users(firstName, lastName, email, password, city, address, contact));
		return "Success";
	}

	@RequestMapping("/api/saveRoom")
	public String process() {
		RoomRepository.save(new Room("Deluxe", "3", "12",
				"Description Description Description Description Description Description Description DescriptionDescription Description Description Description",
				"Deluxe.jpg", "Deluxe.jpg", "Deluxe.jpg", "Deluxe.jpg"));
		RoomRepository.save(new Room("Deluxe", "0", "12",
				"Description Description Description Description Description Description Description DescriptionDescription Description Description Description",
				"Deluxe.jpg", "Deluxe.jpg", "Deluxe.jpg", "Deluxe.jpg"));
		RoomRepository.save(new Room("Premium", "2", "12",
				"Description Description Description Description Description Description Description DescriptionDescription Description Description Description",
				"Deluxe.jpg", "Deluxe.jpg", "Deluxe.jpg", "Deluxe.jpg"));
		return "Success";
	}

	@RequestMapping("/api/findall")
	public List<Users> findAllCustomers() {
		List<Users> result = (List<Users>) CustRepository.findAll();
		return result;
	}

	@RequestMapping("/api/findallb")
	public List<Booking> findAllBokings() {
		List<Booking> result = (List<Booking>) BookingRepository.findAll();
		return result;
	}

	@RequestMapping("/bookingHistory")
	public List<Booking> findAllBookings(@RequestParam("email") String email) {
		List<Booking> result = (List<Booking>) BookingRepository.findByEmail(email);
		return result;
	}

	@RequestMapping("/api/getUser")
	public Users fetchDataByLoginDetails(@RequestParam("email") String email,
			@RequestParam("password") String password) {
		for (Users cust : CustRepository.findByEmail(email)) {
			if (cust.getPassword().contentEquals(password)) {
				return cust;
			}
		}
		return null;
	}

	@RequestMapping("/api/findRooms")
	public List<Room> findAllRooms() {
		List<Room> result = (List<Room>) RoomRepository.findAll();
		return result;
	}

	@RequestMapping("/api/bookRoom")
	public String bookRoom(@RequestParam("type") String type, @RequestParam("price") String price,
			@RequestParam("description") String description, @RequestParam("image1") String image1,
			@RequestParam("image2") String image2, @RequestParam("image3") String image3,
			@RequestParam("image4") String image4, @RequestParam("checkIn") String checkIn,
			@RequestParam("checkOut") String checkOut, @RequestParam("noOfDays") String noOfDays,
			@RequestParam("email") String email, @RequestParam("contact") String contact,
			@RequestParam("totalPrice") String totalPrice, @RequestParam("name") String name) {

		BookingRepository.save(new Booking(type, price, description, image1, image2, image3, image4, checkIn, checkOut,
				noOfDays, email, contact, totalPrice, name));
		return "Success";
	}
}
