import { DataService, bookedRoom } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {
bookingHist: bookedRoom[];

 /*Using the getters and setters from the data service to check the booking history*/
get loginPerson(): string {
    return this.dataService.loginPerson;
  }
  set loginPerson(value: string) {
    this.dataService.loginPerson = value;
  }
  get bookingHistory(): bookedRoom[] {
    return this.dataService.bookingHistory;
  }
  set bookingHistory(value: bookedRoom[]) {
    this.dataService.bookingHistory = value;
  }

  /*Communicating to the db using the below REST servie to get the booking history of the user*/
  constructor(private httpClient: HttpClient, private dataService: DataService) { }
  getHistory() {
  this.httpClient.get
      ('http://localhost:4200/api/findallb?email=' + this.dataService.loginPerson,
      {responseType: 'json'})
      .subscribe(
      (history: bookedRoom[]) => {
        this.bookingHist = history;
        this.dataService.bookingHistory = history;
      });
  }
  ngOnInit() {
    this.getHistory();
  }

}
