import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BusService } from '../Services/bus.service';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {

  busForm: FormGroup;

  constructor(private fb: FormBuilder, private busservice:BusService,private router:Router) {
    this.busForm = this.fb.group({
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
  }

  
  submitForm() {
    if (this.busForm.valid) {
      // Submit the form data
      console.log(this.busForm.value);
      this.busservice.addBus(this.busForm.value).subscribe({
        next:(val:any)=>{
          console.log(val)
          // alert("Data Added Successfully")
          // window.location.reload();
        } 
      })
      console.log(this.busForm.value);
      Swal.fire({
        icon: 'success',
        title: 'New bus Added',
        text: 'bus Data Updated Successfully!',
      }).then(() => {
        this.busservice.getAllBuses();
        this.router.navigate(['/busList']); 
      });      
    } else {
      // Handle validation errors
      Swal.fire({
        icon: 'error',
        text: 'Please Enter Valid Data',
      })
      console.log('Form contains validation errors.');
    }
  }

  goBack() {
     // Reload the page
  }
  reload(){
    window.location.reload();
  }

}

