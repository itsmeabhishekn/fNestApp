import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-mytask',
  templateUrl: './view-mytask.component.html',
  styleUrls: ['./view-mytask.component.css']
})
export class ViewMytaskComponent {

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


}
