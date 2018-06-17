import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import {RouterModule, Route} from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { DataService } from './data.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    CheckoutComponent,
    LoginRegisterComponent,
    ConfirmationComponent,
    UserProfileComponent,
    BookinghistoryComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    HomeComponent,
    LogoutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    RouterModule.forRoot([
    {
    path: '',
    component: HomeComponent
    },
    {
    path: 'rooms',
    component: RoomsComponent
    },
    {
    path: 'rooms/checkout',
    component: CheckoutComponent
    },
    {
    path: 'rooms/checkout/confirmation',
    component: ConfirmationComponent
    },
    {
    path: 'contact',
    component: ContactComponent
    },
    {
    path: 'history',
    component: BookinghistoryComponent
    },
    {
    path: 'logout',
    component: LogoutComponent
    },
    {
    path: 'login',
    component: LoginRegisterComponent
    },
    ]),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
