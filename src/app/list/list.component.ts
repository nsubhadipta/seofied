import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  

  // profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   position: new FormControl('')
  // });


  


  brews: Object;
  profileForm: FormGroup;
  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    // this._http.getAllEmployee().subscribe(response =>{
    //   this.brews =response['data'];
    //   console.log(this.brews);
      
    // });
    // this.updateName();
    this.profileForm = new FormGroup({
      name: new FormControl(''),
      position: new FormControl('')
    });
    this.getProfile();
  }


  getProfile(){
    this._http.getAllEmployee().subscribe(response =>{
      this.brews =response['data'];
      console.log(this.brews);
      
    });
  }

  updateName() {
    //  console.log(this.profileForm.value);
     this._http.createEmployee(this.profileForm.value).subscribe(response =>{
       console.log(response);
       this.getProfile();
       this.profileForm.reset();
     })
  }

  deleteEmpl(id){
    this._http.deleteEmployee(id).subscribe(data => {
      this.getProfile();
    });
  }
  
  // clickMethod(name: string) {
  //   if(confirm("Are you sure to delete "+name)) {
  //     console.log("Implement delete functionality here");
  //   }
  // } (click)="clickMethod('name')"

}
