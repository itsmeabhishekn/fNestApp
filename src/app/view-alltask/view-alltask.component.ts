import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-alltask',
  templateUrl: './view-alltask.component.html',
  styleUrls: ['./view-alltask.component.css']
})
export class ViewAlltaskComponent {

  searchData:any=[]

  constructor(private api:ApiService){

    this.api.ViewAllTasks().subscribe(


      (response:any)=>
      {
        console.log(response)

        this.searchData=response

      }
    )

  }

}
