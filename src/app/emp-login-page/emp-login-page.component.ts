import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-login-page',
  templateUrl: './emp-login-page.component.html',
  styleUrls: ['./emp-login-page.component.css']
})
export class EmployeeLoginPageComponent {

  email=""
  password=""

  constructor(private api:ApiService,private route:Router){}


  employeeLoginCheck=()=>
  {
    let data:any={"email":this.email,"password":this.password}

    console.log(data)

    this.api.EmployeeLogin(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status=="success")
        {
          localStorage.setItem("empInfo",response.id)

          this.route.navigate(["/employeeProfile"])
        }
        else
        {
          alert("Invalid Login!")

          this.email=""
          this.password=""  
        }
      }
    )


  }

}
