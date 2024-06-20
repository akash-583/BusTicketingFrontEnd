import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './RouteGuard/auth.guard';
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

const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'addbus',component:AddbusComponent,canActivate:[AuthGuard]},
  {path:'busList',component:BuslistComponent,canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'cancel',component:CancelComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'contactus',component:ContactusComponent},
  {path: 'bookinglist', component: BookinglistComponent,canActivate:[AuthGuard]},
  {path: 'bookingform', component: BookingformComponent,canActivate:[AuthGuard]},
  {path: 'payment', component: PaymentComponent,canActivate:[AuthGuard]},
  {path: 'paymentlist', component: PaymentlistComponent,canActivate:[AuthGuard]},
  {path:'issueform',component:IssueformComponent,canActivate:[AuthGuard]},
  {path:'issuelist',component:IssuelistComponent,canActivate:[AuthGuard]},
  {path:'userlist',component:UserlistComponent,canActivate:[AuthGuard]},
  {path:'adminlogin',component:AdminloginComponent,canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'**',redirectTo:'homepage',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
