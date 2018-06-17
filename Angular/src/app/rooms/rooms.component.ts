import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {DataService, Rooms} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  validRooms: Rooms[];
  
 /*using the getters and setters from the data service */
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
  get days(): number {
    return this.dataService.days;
  }
  set days(value: number) {
    this.dataService.days = value;
  }
  get adults(): number {
    return this.dataService.adults;
  }
  set adults(value: number) {
    this.dataService.adults = value;
  }
  get selectedRoomID(): number {
    return this.dataService.selectedRoomID;
  }
  set selectedRoomID(value: number) {
    this.dataService.selectedRoomID = value;
  }
  start: any;
  end:any;

  constructor(private httpClient: HttpClient, private router: Router, public dataService: DataService) {}
  dateDifference() {
    this.end = new Date(this.checkOut);
    this.start = new Date(this.checkIn);
    this.days = (this.end - this.start) / (24 * 3600 * 1000) + 1;
}
  findRooms() {
    this.httpClient.get
      ('http://localhost:4200/api/findRooms',
      {responseType: 'json'})
      .subscribe(
      (validRooms: Rooms[]) => {
        this.validRooms = validRooms;
        this.dataService.validRooms = validRooms;
      });
  }
  selectRoom(roomID) {
    this.dataService.selectedRoomID = roomID;
    this.router.navigate(['/rooms/checkout']);
  }
  
  ngOnInit() {
    this.findRooms();
    this.dateDifference();
  }

}
