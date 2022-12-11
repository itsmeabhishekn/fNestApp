import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  EmployeeRegistration=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addEmployee",dataToSend)
  }

  EmployeeLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/login",dataToSend)
  }

  EmployeeProfile=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/empdetails",dataToSend)
  }

  AddTask=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addTask",dataToSend)
  }

  ViewMyTasks=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/viewMyTasks",dataToSend)
  }

  ViewAllTasks=()=>
  {
    return this.http.get("http://localhost:8080/viewAllTasks")
  }

  updateTaskStatus=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/updateTaskStatus",dataToSend)
  }

}
