import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-registration-page',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationPageComponent {

  name=""
  dob=""
  phoneNo=""
  address=""
  email=""
  password=""

  constructor(private api:ApiService){}

  EmployeeRegister=()=>
  {
    let data:any={
      "name":this.name,
      "dob":this.dob,
      "phoneNo":this.phoneNo,
      "address":this.address,
     "email":this.email,
     "password":this.password
    }

    console.log(data)

    this.api.EmployeeRegistration(data).subscribe(
      
      (response:any)=>
      {
        console.log(response)

        if(response.status=="success")
        {
          alert(" Registered successfully!")
          
          this.name=""
          this.dob=""
          this.phoneNo=""
          this.address=""
          this.email=""
          this.password=""

        }
        else
        {
          alert("task failed succesfully")
        }


      }
    )

  }
}
