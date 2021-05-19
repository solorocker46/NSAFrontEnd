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

  updateStudent(student:Student):Observable<any>
  {
    let url='http://localhost:8034/student/editStudent';
    return this.http.put(url+"/"+student.userId,student,{responseType:'text'});
  }

  getByStudentId(studentId:number):Observable<any>
  {
    let url='http://localhost:8034/student/findByStudentId';
    return this.http.get(url+"/"+studentId);
  }

  getByInstitutionName(institutionName:String):Observable<any>
  {
    let url='http://localhost:8034/student/getByInstitutionName';
    return this.http.get(url+"/"+institutionName);
  }

  getByUserId(userId:string):Observable<any>
  {
    let url = 'http://localhost:8034/student/findByUserId';
    return this.http.get(url+"/"+userId);
  }

  editInstitutionDetails(student:Student,institutionName:String):Observable<any>
  {
    let url='http://localhost:8034/student/editInstitutionDetails';
    return this.http.put(url+"/"+student.studentId,institutionName,{responseType:'text'});
  }

  applyScholarship(studentId:number,scholarshipId:number):Observable<any>
  {
    let url='http://localhost:8034/student/updateScholarshipDetails';
    return this.http.put(url+"/"+studentId,scholarshipId,{responseType:'text'});
  }
}
