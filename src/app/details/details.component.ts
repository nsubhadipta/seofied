import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  employee: Object;
  constructor(private _http: HttpService) { }

  ngOnInit(): void {

    this.getempl();
  }

  getempl(){
    this._http.getAllEmployee().subscribe(response =>{
      this.employee =response['data'];
      console.log(this.employee);
      
    });
  }

}
