import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  empId=""
  taskName=""
  taskStatus=""

  constructor(private api:ApiService){}

  AddTask=()=>
  {

    let data:any={
      "empId":this.empId,
      "taskName":this.taskName,
      "taskStatus":this.taskStatus
    }

    console.log(data)

    this.api.AddTask(data).subscribe(

      (response:any)=>
      {

        console.log(response)

        if(response.status=="success")
        {
            alert("Task added successfully!")
            this.empId=""
            this.taskName=""
            this.taskStatus=""

        }
        else
        {
          alert("unable to add Task")
          
        }


      }

    )


  }

}
