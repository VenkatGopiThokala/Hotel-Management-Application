import {DataService} from '../data.service';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
	
	
/* Using getters and setters from the data service to know the login status*/	
  get loginStatus(): boolean {
    return this.dataService.loginStatus;
  }
  set loginStatus(value: boolean) {
    this.dataService.loginStatus = value;
  }


  constructor(private httpClient: HttpClient, private router: Router, public dataService: DataService) {}

  ngOnInit() {
    this.dataService.loginPerson = null;
    this.router.navigate(['']);
  }
}
