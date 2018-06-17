import {DataService, bookedRoom} from '../data.service';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-conformation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  get bookedRoom(): bookedRoom {
    return this.dataService.bookedRoom;
  }
  set bookedRoom(value: bookedRoom) {
    this.dataService.bookedRoom = value;
  }
  roomType: string;
  price: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  checkIn: Date;
  checkOut: Date;
  days: number;
  email: string;
  contact: number;
  name: string;
  totalPrice: number;
  image: string;
  constructor(public dataService: DataService, public router: Router, public httpClient: HttpClient) {
  }

  
  /*fetching the required details from the data service*/
  
  ngOnInit() {
    console.log(this.dataService.bookedRoom);
    this.checkIn = this.dataService.bookedRoom.checkIn;
    this.checkOut = this.dataService.bookedRoom.checkOut;
    this.totalPrice = this.dataService.bookedRoom.totalPrice;
    this.name = this.dataService.bookedRoom.name;
    this.email = this.dataService.bookedRoom.email;
    this.contact = this.dataService.bookedRoom.contact;
    this.days = this.dataService.bookedRoom.no_of_days;
    this.image = this.dataService.bookedRoom.image1;
  }
}
