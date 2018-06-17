package com.h2database.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
 
@Entity
@Table(name = "user")
public class Users implements Serializable {
 
    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
 
    @Column(name = "firstname")
    private String firstName;
 
    @Column(name = "lastname")
    private String lastName;
    
    @Column(name = "email")
    private String email;
    
    @Column(name = "password")
    private String password;
    
    @Column(name = "city")
    private String city;
    
    @Column(name = "address")
    private String address;
    
    @Column(name = "contact")
    private long contact;
    
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public long getContact() {
		return contact;
	}

	public void setContact(long contact) {
		this.contact = contact;
	}

	
 
    public Users() {
    }
 
    public Users(long id, String firstName, String lastname, String email, String password, String city,
			String address, long contact) {
    	this.id = id;
		this.firstName = firstName;
		this.lastName = lastname;
		this.email = email;
		this.password = password;
		this.city = city;
		this.address = address;
		this.contact = contact;
    }
    public Users(String firstName, String lastname, String email, String password, String city,
			String address, long contact) {
		this.firstName = firstName;
		this.lastName = lastname;
		this.email = email;
		this.password = password;
		this.city = city;
		this.address = address;
		this.contact = contact;
    }
 
    @Override
    public String toString() {
        return String.format("Customer[id=%d, firstName='%s', lastName='%s', email='%s', password='%s', city='%s', address='%s', contact='%d']", id, firstName, lastName, email, password, city, address, contact);
    }
}
