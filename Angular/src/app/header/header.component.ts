import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
loggedInPerson : string;
/*Using the getters and setters from the dataservice to check the login status*/

  get loginStatus(): boolean {
    return this.dataService.loginStatus;
  }
  set loginStatus(value: boolean) {
    this.dataService.loginStatus = value;
  }
  constructor(private httpClient: HttpClient, public dataService: DataService, public router: Router) {}

  ngOnInit() {
    this.loggedInPerson = this.dataService.loginPerson;
  }

}
