import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ministry } from '../modules/ministry';
import { Student } from '../modules/student';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class MinistryService {

  constructor(private http:HttpClient) { 

  }

  createNewMinistry(ministry:Ministry):Observable<any>{
    let url='http://localhost:8034/MinistryApi/addMinistry';
    return this.http.post(url,ministry,{responseType:'text'});
  }

  getMinistry():Observable<Ministry[]>{
    let url='http://localhost:8034/MinistryApi/getAll';
    return this.http.get<Ministry[]>(url);
  }

  grantScholarship(student:Student):Observable<any>{
    let url='http://localhost:8034/MinistryApi/grantScholarship';
    return this.http.post(url + "/" + student.studentId,student,{responseType:'text'});
  }

  getMinistryById(userId:string):Observable<any>{
    let url='http://localhost:8034/MinistryApi/getMinistryById';
    return this.http.get(url+"/"+userId);
  }
}


