import {DataService, Rooms} from '../data.service';
import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {DatePickerComponent} from 'ngx-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

/*Using getters and setters from the data service for the checkout process*/
export class HomeComponent {
  get data(): Rooms[] {
    return this.dataService.validRooms;
  }
  set data(value: Rooms[]) {
    this.dataService.validRooms = value;
  }
  get checkIn(): Date {
    return this.dataService.checkIn;
  }
  set checkIn(value: Date) {
    this.dataService.checkIn = value;
  }
  get checkOut(): Date {
    return this.dataService.checkOut;
  }
  set checkOut(value: Date) {
    this.dataService.checkOut = value;
  }
  get children(): number {
    return this.dataService.children;
  }
  set children(value: number) {
    this.dataService.children = value;
  }
  get adults(): number {
    return this.dataService.adults;
  }
  set adults(value: number) {
    this.dataService.adults = value;
  }
  constructor(private httpClient: HttpClient, private router: Router, public dataService: DataService) {}
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  city: string;
  address: string;
  contact: number;
  formMessage: string;
  rtype: string;
  validRooms: Rooms[]
  validateInput() {
    var d1 = new Date();
	
	/*Form message if any entry is null, and if checkin date is greater than checkout date or else it will navigate to the next 'rooms' page*/
	
    if (this.checkIn == null || this.checkOut == null || this.adults == null || this.children == null) {
      this.formMessage = 'Please provide all the details';
    } else if (this.checkIn > this.checkOut) {
      this.formMessage = 'Please provide valid dates';
    } else {
      this.formMessage = ' ';
      this.router.navigate(['/rooms']);
    }
  }
  /*validating the user details from the database using the email and pwd provided*/
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

  /*Creating user by the details entered in the registration form*/
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
