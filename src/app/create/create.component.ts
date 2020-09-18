import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
    position: new FormControl(''),
    office: new FormControl(''),
    age: new FormControl(''),
    startDate: new FormControl(''),
    salary: new FormControl(''),
  });

  addEmp() {
    //  console.log(this.profileForm.value);
     this._http.createEmployee(this.profileForm.value).subscribe(response =>{
       console.log(response);
       this.router.navigate(['/details'])
     })
    }

  constructor(private _http: HttpService, public router: Router) { }

  ngOnInit(): void {
  }

}
