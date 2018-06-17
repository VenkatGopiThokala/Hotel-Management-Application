import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DatePickerComponent} from 'ngx-bootstrap';

class Room {
  id: number;
  type: string;
  count: string;
  price: string;
  image1: string;
  image2: string;
  image3: number;
  }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {}
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  city: string;
  address: string;
  contact: number;
  checkIn: Date;
  checkOut: Date;
  adults: number;
  children: number;
  formMessage: string;
  rtype : string;
  validRooms : Room[]
  
  validateInput() {
    if (this.checkIn == null && this.checkOut == null && this.adults == null && this.children == null) {
        this.formMessage = 'Please provide all the details';
      } 
    else if (this.checkIn > this.checkOut) 
      { 
      this.formMessage = 'Please provide valid dates';
      } else {
      this.formMessage = ' ';
      this.findRooms();
      }
  }
  findRooms() {
    console.log(this.checkIn, this.checkOut, this.adults, this.children);
    this.httpClient.get
      ('http://localhost:4200/api/findRooms',
      {responseType: 'json'})
      .subscribe(
      (validRooms : Room[]) => {
        this.validRooms = validRooms;
        console.log(validRooms);
        this.rtype = validRooms[0].type;
      });
  }
  validateUser() {
    this.httpClient.get
      ('http://localhost:4200/api/getUser?email=' + this.email + '&&password=' + this.password,
      {responseType: 'json'})
      .subscribe(
      data => {
        if (data === this.email) {
          alert('Login Successful');
        } else {
          alert('Login Failed');
        }
      });
  }

  createUser() {
    console.log(this.firstName, this.lastName, this.email, this.address, this.contact, this.password, this.city);
    this.httpClient.get
      ('http://localhost:4200/api/createUser?firstName=' + this.firstName
      + '&&lastName=' + this.lastName + '&&email=' + this.email + '&&password='
      + this.password + '&&city=' + this.city + '&&address=' + this.address + '&&contact=' + this.contact,
      {responseType: 'text'})
      .subscribe(
      (data) => {
        if (data === 'Success') {
          alert('Successfully Registered');
        }
      });
  }
}
