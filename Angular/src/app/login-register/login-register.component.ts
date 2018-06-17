import { DataService } from '../data.service';
import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

class Customer {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  city: string;
  address: string;
  contact: number;
}

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})

/*Using getters and setters from the data service to know the login status*/
export class LoginRegisterComponent {
  get loginStatus(): boolean {
    return this.dataService.loginStatus;
  }
  set loginStatus(value: boolean) {
    this.dataService.loginStatus = value;
  }
  get loginPerson(): string {
    return this.dataService.loginPerson;
  }
  set loginPerson(value: string) {
    this.dataService.loginPerson = value;
  }
  get loginName(): string {
    return this.dataService.loginName;
  }
  set loginName(value: string) {
    this.dataService.loginName = value;
  }
  get loginContact(): number {
    return this.dataService.loginContact;
  }
  set loginContact(value: number) {
    this.dataService.loginContact = value;
  }
  formMessage: string;
  constructor(private httpClient: HttpClient, public dataService: DataService, public router: Router) {}

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  city: string;
  address: string;
  contact: number;

  ngOnInit() {
      document.getElementById('lgn').style.display = 'block';
  }
  
  /*To validate the login details based on the store details in database*/
  validateUser() {
    this.httpClient.get
      ('http://localhost:4200/api/getUser?email=' + this.email + '&&password=' + this.password,
      {responseType: 'json'})
      .subscribe(
      (data: Customer) => {
        if (data === null) {
          alert('Login Failed');
        } else {
          this.dataService.loginStatus = true;
          this.dataService.loginPerson = data.email;
          this.dataService.loginContact = data.contact;
          this.dataService.loginName = data.firstName;
          this.router.navigate(['']);
        }
      });
  }
  
  /*Code to make sure none of the fields are empty in the registration form*/ 
  validateRegistration() {
    if (this.firstName == null || this.lastName == null || this.email == null || this.address == null 
      || this.contact == null || this.password == null || this.city == null)
     {
       this.formMessage = 'Please provide all the details';
      } 
    else {
      this.formMessage = ' ';
      this.createUser();
      }
  }

  /*To store the entered details in the database for the registration form*/
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
          this.router.navigate(['']);
        }
      });
  }

}
