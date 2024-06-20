import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { IssueformComponent } from './issueform/issueform.component';
import { IssuelistComponent } from './issuelist/issuelist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddbusComponent } from './addbus/addbus.component';
import { BuslistComponent } from './buslist/buslist.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { CancelComponent } from './cancel/cancel.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AdminloginComponent,
    IssueformComponent,
    IssuelistComponent,
    UserlistComponent,
    AddbusComponent,
    BuslistComponent,
    BookinglistComponent,
    BookingformComponent,
    PaymentComponent,
    PaymentlistComponent,
    CancelComponent,
    ThankyouComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
