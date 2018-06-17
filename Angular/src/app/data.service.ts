import {Injectable} from '@angular/core';
export class Rooms {
  id: number;
  type: string;
  count: string;
  price: string;
  image1: string;
  image2: string;
  image3: string;
  description: string;
}
export class bookedRoom {
  type: string;
  price: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  checkIn: Date;
  checkOut: Date;
  no_of_days: number;
  email: string;
  contact: number;
  name: string;
  totalPrice: number;
}

@Injectable()
export class DataService {
  validRooms: Rooms[];
  checkIn: Date;
  checkOut: Date;
  adults: number;
  children: number;
  selectedRoomID: number;
  loginStatus: boolean;
  days: number;
  bookedRoom: bookedRoom;
  bookingHistory: bookedRoom[];
  loginPerson: string;
    loginContact: number;
  loginName: string;
}
