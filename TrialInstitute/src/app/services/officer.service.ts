import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institution } from '../modules/institution';
import { Officer } from '../modules/officer';
import { Student } from '../modules/student';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {

  constructor(private http:HttpClient) { }

  getAllOfficers():Observable<any>{

    const url='http://localhost:8034/officer/getAll';
     return this.http.get(url);
   }

   createNewOfficer(officer:Officer):Observable<any>{

    const url='http://localhost:8034/officer/addOfficer';
     return this.http.post(url,officer,{responseType:'text'});
   }

   updateOfficer(officer:Officer):Observable<any>{
    let url ='http://localhost:8034/officer/updateOfficer';
    return this.http.put(url + "/" + officer.userId,officer,{responseType:'text'});

   }

   updateStatus(code:number, status:string):Observable<any>{
    let url ='http://localhost:8034/officer/updateStatus';
    return this.http.put(url + "/" + code, status ,{responseType:'text'});
   }

   grantApproval(student:Student):Observable<any>{
    let url ='http://localhost:8034/officer/grantApproval';

    return this.http.post(url + "/" + student.studentId,student,{responseType:'text'});
   }

   getOfficerByUserId(userId:string):Observable<any>
   {
     let url = 'http://localhost:8034/officer/getOfficerById';
     return this.http.get(url+"/"+userId);
   }

   getByCode(code:number):Observable<any>
  {
    let url = 'http://localhost:8034/institution/getInstituteByCode';
    return this.http.get(url+"/"+code);
  }
}
