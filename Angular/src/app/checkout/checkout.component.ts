import {DataService, Rooms, bookedRoom} from '../data.service';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  get data(): Rooms[] {
    return this.dataService.validRooms;
  }
  
  /*Using the getters and setters from the data service to check the checkout details*/
  set data(value: Rooms[]) {
    this.dataService.validRooms = value;
  }
  get bookedRoom(): bookedRoom {
    return this.dataService.bookedRoom;
  }
  set bookedRoom(value: bookedRoom) {
    this.dataService.bookedRoom = value;
  }
  get selectedRoomID(): number {
    return this.dataService.selectedRoomID;
  }
  set selectedRoomID(value: number) {
    this.dataService.selectedRoomID = value;
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
  get days(): number {
    return this.dataService.days;
  }
  set days(value: number) {
    this.dataService.days = value;
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
  email: string;
  city: string;
  address: string;
  contact: number;
  checkIn: Date;
  checkOut: Date;
  price: any;
  roomType: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  descriptipn: string;
  type: string;
  description: string;
  totalPrice: number;
  name: string;
  bRooms: bookedRoom;
  constructor(public dataService: DataService, public router: Router, public httpClient: HttpClient) {
  }

  createBooking() {
    this.httpClient.get
      ('http://localhost:4200/api/bookRoom?type=' + this.roomType
      + '&&price=' + this.price + '&&description=' + this.description + '&&image1='
      + this.image1 + '&&image2=' + this.image2 + '&&image3=' + this.image3 + '&&image4=' + this.image4 +
      '&&checkIn=' + this.checkIn + '&&checkOut=' + this.checkOut + '&&noOfDays='
      + this.days + '&&email=' + this.email + '&&contact=' + this.contact + '&&totalPrice=' + this.totalPrice
      + '&&name=' + this.name,
      {responseType: 'text'})
      .subscribe(
      (data) => {
        if (data === 'Success') {
          alert('Booking Successfull');
          this.saveBooking();
          this.router.navigate(['rooms/checkout/confirmation']);
        } else {
          alert('Booking failure');
        }
      });
  }
  saveBooking() {
    //    this.bRooms = [
    //      new bookedRooms(this.roomType,this.price,this.description,this.image1,this.image2,this.image3,
    //      this.image4,this.checkIn, this.checkOut,this.days,this.email,this.contact,this.totalPrice,this.name)
    //    ]
    this.bRooms = {
      type: this.roomType,
      price: this.price,
      description: this.description,
      image1: this.image1,
      image2: this.image2,
      image3: this.image3,
      image4: this.image4,
      checkIn: this.checkIn,
      checkOut: this.checkOut,
      no_of_days: this.days,
      email: this.email,
      contact: this.contact,
      totalPrice: this.totalPrice,
      name: this.name};
      console.log(this.bRooms)
        this.dataService.bookedRoom = this.bRooms;
    }
    calculateTotalPrice() {
      this.totalPrice = this.price * this.days;
      console.log(this.price, this.days)
    }

    ngOnInit() {
        this.name = this.dataService.loginName;
        this.contact = this.dataService.loginContact;
        this.email = this.dataService.loginPerson;
      for (let selectedRoom of this.dataService.validRooms) {
        if (selectedRoom.id === this.dataService.selectedRoomID) {
          this.checkIn = this.dataService.checkIn;
          this.checkOut = this.dataService.checkOut;
          this.adults = this.dataService.adults;
          this.children = this.dataService.children;
          this.price = selectedRoom.price;
          this.roomType = selectedRoom.type;
          this.image1 = selectedRoom.image1;
          this.image2 = selectedRoom.image2;
          this.image3 = selectedRoom.image3;
          this.description = selectedRoom.description;
          console.log(selectedRoom);
        }
      }
      this.calculateTotalPrice();

    }

  }
