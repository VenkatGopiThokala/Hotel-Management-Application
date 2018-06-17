package com.h2database.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity // @Entity which define that this is a table
@Table(name = "bookings")
public class Booking implements Serializable {
	
	private static final long serialVersionUID = -3009157732242341606L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
	// @Columns defines the columns with the datatype
    @Column(name = "type")
    private String type;
    
    @Column(name = "price")
    private String price;
    
    @Column(name = "description")
    private String description;
    
    @Column(name = "image1")
    private String image1;
    
    @Column(name = "image2")
    private String image2;
    
    @Column(name = "image3")
    private String image3;
    
    @Column(name = "image4")
    private String image4;
    
    @Column(name = "checkIn")
    private String checkIn;
    
    @Column(name = "checkOut")
    private String checkOut;
    
    @Column(name = "noOfDays")
    private String noOfDays;
    
    @Column(name = "email")
    private String email;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "contact")
    private String contact;
    
    @Column(name = "totalPrice")
    private String totalPrice;
    
    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage1() {
		return image1;
	}

	public void setImage1(String image1) {
		this.image1 = image1;
	}

	public String getImage2() {
		return image2;
	}

	public void setImage2(String image2) {
		this.image2 = image2;
	}

	public String getImage3() {
		return image3;
	}

	public void setImage3(String image3) {
		this.image3 = image3;
	}

	public String getImage4() {
		return image4;
	}

	public void setImage4(String image4) {
		this.image4 = image4;
	}

	public String getCheckIn() {
		return checkIn;
	}

	public void setCheckIn(String checkIn) {
		this.checkIn = checkIn;
	}

	public String getCheckOut() {
		return checkOut;
	}

	public void setCheckOut(String checkOut) {
		this.checkOut = checkOut;
	}

	public String getNoOfDays() {
		return noOfDays;
	}

	public void setNoOfDays(String noOfDays) {
		this.noOfDays = noOfDays;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(String totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	public Booking() {
    }
	
	public Booking(String email) {
		this.email = email;
	}

	public Booking(String type, String price, String description, String image1, String image2, String image3,
			String image4, String checkIn, String checkOut, String noOfDays, String email, String contact,
			String totalPrice, String name) {
		
		this.type = type;
		this.price = price;
		this.description = description;
		this.image1 = image1;
		this.image2 = image2;
		this.image3 = image3;
		this.image4 = image4;
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.noOfDays = noOfDays;
		this.email = email;
		this.contact = contact;
		this.totalPrice = totalPrice;
		this.name = name;
	}

	public Booking(long id, String type, String price, String description, String image1, String image2, String image3,
			String image4, String checkIn, String checkOut, String noOfDays, String email, String contact,
			String totalPrice, String name) {
		
		this.id = id;
		this.type = type;
		this.price = price;
		this.description = description;
		this.image1 = image1;
		this.image2 = image2;
		this.image3 = image3;
		this.image4 = image4;
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.noOfDays = noOfDays;
		this.email = email;
		this.contact = contact;
		this.totalPrice = totalPrice;
		this.name = name;
	}

	@Override
    public String toString() {
        return String.format("Room[id=%d, type='%s', price='%s', description='%s', image1='%s', image2='%s', image3='%s', image4='%s'"
        		+ ", checkIn='%s', checkOut='%s', noOfDays='%s', email='%s', contact='%s', totalPrice='%s', name='%s']",
        		id, type, price, description, image1, image2, image3, image4, checkIn, checkOut, noOfDays, email, contact, totalPrice, name  );
    }

}
