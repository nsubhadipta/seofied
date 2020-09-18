import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllEmployee() {
    return this.http.get('http://127.0.0.1:8000/api/getemployees')
  }
  createEmployee(Obj) {
    var body={
      "name":Obj.name,
      "position":Obj.position,
      "office":Obj.office,
      "age":Obj.age,
      "startDate":Obj.startDate,
      "salary":Obj.salary,
    }
    return this.http.post('http://localhost:8000/api/addemployees', body);
  }

  deleteEmployee(id){
    return this.http.delete('http://127.0.0.1:8000/api/deleteemployee/'+ id)
  }
  editEmployee(id, kuch){
    var ggg={
      "name":kuch.name,
      "position":kuch.position,
      "office":kuch.office,
      "age":kuch.age,
      "startDate":kuch.startDate,
      "salary":kuch.salary,
    }
    return this.http.put('http://localhost:8000/api/editEmployee/'+ id, ggg);

  }

  getEmployee(id) {
    return this.http.get('http://127.0.0.1:8000/api/getemployee/'+ id)
  }

}
