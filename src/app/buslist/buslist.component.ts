import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusService } from '../Services/bus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})
export class BuslistComponent implements OnInit {
 
  formValue!: FormGroup;
  isLoggedIn: boolean = false;
  isRole: string | null = null;

  dataSource: any[] = [];
  dataSource1: any[] = [];

  constructor(private fb: FormBuilder, private busservice:BusService,private router:Router) {
    this.formValue = this.fb.group({
      busNo: ['', [Validators.required, Validators.pattern('\\d{5}')]],
      source: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      destination: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      fare: [0, [Validators.required, Validators.min(0), Validators.max(3000)]],
      seats: [0, [Validators.required, Validators.min(0), Validators.max(300)]],
      dropTime: ['', [Validators.required]],
      boardingTime: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    this.getBusList();
    this.busservice.getAllBuses();
    const loggedInValue = sessionStorage.getItem('loggedIn');
    this.isLoggedIn = loggedInValue === 'true';
    this.isRole = sessionStorage.getItem('role');
    console.log(this.dataSource);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource = this.dataSource.filter((row) => {
      return (
        row.busNo.toLowerCase().includes(filterValue) ||
        row.source.toLowerCase().includes(filterValue) ||
        row.destination.toLowerCase().includes(filterValue)
      );
    });

    if (!filterValue || filterValue === '') {
      this.getBusList();
    }
  }

  getBusList() {
    this.busservice.getAllBuses().subscribe({
      next: (res) => {
        this.dataSource = res;
      },
      error: console.error,
    });
  }
  getBusList1() {
    this.busservice.getAllBuses().subscribe({
      next: (res) => {
        this.dataSource1 = res;
      },
      error: console.error,
    });
  }

  deleteBus(busNo: any) {
    console.log('Deleting bus with bus: ', busNo);

    this.busservice.deleteBus(busNo).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
    Swal.fire({
      icon: 'success',
      title: 'Deleted Successful',
      text: 'Bus deleted successfully!',
    }).then((result:any) => {
      window.location.reload();
      })
  this.busservice.getAllBuses();
  
  }

  EditForm(data: any) {
    this.formValue.controls['busNo'].setValue(data.busNo);
    this.formValue.controls['source'].setValue(data.source);
    this.formValue.controls['destination'].setValue(data.destination);
    this.formValue.controls['fare'].setValue(data.fare);
    this.formValue.controls['seats'].setValue(data.seats);
    this.formValue.controls['dropTime'].setValue(data.dropTime);
    this.formValue.controls['boardingTime'].setValue(data.boardingTime);
    console.log(this.formValue.value.busNo);
    sessionStorage.setItem('busNo', this.formValue.value.busNo);
  }

  redirectToBookingOrLogin(data: any) {
    if (this.isLoggedIn) {
      // If logged in, check their role
      sessionStorage.setItem('busNo', data.busNo);
      sessionStorage.setItem('fare', data.fare);
      console.log(data.busNo);
      if (this.isRole === 'User') {
        // Redirect regular user to booking page
        this.router.navigate(['/bookingform']);
       
      }
    } else {
      // If not logged in, redirect to login page
      alert("please login after that you can able to book a ticket")
      this.router.navigate(['/login']);
    }
  }
  updateBus() {
    console.log(this.formValue.value)
    this.busservice
      .updateBus(this.formValue.value.busNo, this.formValue.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/busList']);
        },
      });
      Swal.fire({
        icon: 'success',
        title: 'Update Successful',
        text: 'bus Info Updated Successfully!',
      }).then(() => {
        window.location.reload();
      });
      this.getBusList();
  }
  onSubmit() {
    this.router.navigate(['/busList']);
    this.getBusList();
  }

}
