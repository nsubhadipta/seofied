import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  empdetails: any;

  
  productForm: FormGroup;
  

  editEmp() {
    //  console.log(this.profileForm.value);
     this._http.editEmployee(this.id,this.productForm.value).subscribe(response =>{
       console.log(response);
       this.router.navigate(['/details'])
     })
    }

  constructor(public fb: FormBuilder, private route:ActivatedRoute, private _http: HttpService, public router: Router) { }

  ngOnInit(): void {
    productForm: FormGroup;
    this.productForm = this.fb.group({
      name: [''],
      position: [''],
      office: [''],
      age: [''],    
      startDate: [''],    
      salary: [''],    
    })
    
    

    if(this.route.snapshot.paramMap.get('id')){
      this.id=+this.route.snapshot.paramMap.get('id');
      console.log(this.id);

      this._http.getEmployee(this.id).subscribe(res=>{
        console.log(res[0]);
        this.empdetails=res[0];
      })
    }


  }

}
