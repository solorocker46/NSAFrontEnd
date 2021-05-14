import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../modules/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) 
  { }
  
  getStudent():Observable<any>
  {
    let url='http://localhost:8034/student/getAllStudents';
    return this.http.get(url);
  }

  addNewStudent(student:Student):Observable<any>
  {
    let url='http://localhost:8034/student/addStudent';
    return this.http.post(url,student,{responseType:'text'});
  }
}
