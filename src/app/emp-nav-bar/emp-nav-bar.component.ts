import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-nav-bar',
  templateUrl: './emp-nav-bar.component.html',
  styleUrls: ['./emp-nav-bar.component.css']
})
export class EmpNavbarComponent {


  empid:any=""

  constructor(){

    this.empid=localStorage.getItem("empInfo")
  }

  RemoveID=()=>
  {
    localStorage.removeItem("empInfo")
    localStorage.clear
  }

}
