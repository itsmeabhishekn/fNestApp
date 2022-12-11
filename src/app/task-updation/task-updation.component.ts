import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-task-updation',
  templateUrl: './task-updation.component.html',
  styleUrls: ['./task-updation.component.css']
})
export class UpdateTaskPageComponent {

  searchData:any=[]

  constructor(private api:ApiService){

    let data:any={"empId":localStorage.getItem("empInfo")}

    console.log(data)

    this.api.ViewMyTasks(data).subscribe(

      (response:any)=>
      {
        console.log(response)
        
        this.searchData=response

      }


    )

  }

  taskName=""
  taskStatus=""

  UpdateStatus=()=>
  {
    let data:any={

      "empId":localStorage.getItem("empInfo"),
      "taskName":this.taskName,
      "taskStatus":this.taskStatus
    }

    console.log(data)

    this.api.updateTaskStatus(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status=="success")
        {
          alert("task updated succesfully")
        }
        else
        {
          alert("unable to update task")
        }
      }
    )

  }

}
