import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private httpClient: HttpClient) {}
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  city: string;
  address: string;
  contact: number;
  formMessage: string;

  ngOnInit() {
      document.getElementById('rgr').style.display = 'block';
  }
  
  
/*Code to make sure none of the fields are empty in the registration form*/  
    validateRegistration() {
    if (this.firstName == null || this.lastName == null || this.email == null || this.address == null || this.contact == null || this.password == null || this.city == null)
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
        }
      });
  }

}

