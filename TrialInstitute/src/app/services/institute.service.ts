import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institution } from '../modules/institution';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  constructor(private http:HttpClient) { }

  addInstitute(institution:Institution):Observable<any>
  {
    let url = 'http://localhost:8034/institution/addInstitute';
    return this.http.post(url, institution, {responseType:'text'});
  }

  viewAllInstitutes():Observable<any>
  {
    let url = 'http://localhost:8034/institution/getAllInstitutes';
    return this.http.get(url);
  }

  getByCode(code:number):Observable<any>
  {
    let url = 'http://localhost:8034/institution/getInstituteByCode';
    return this.http.get(url+"/"+code);
  }

  getByUserId(userId:string):Observable<any>
  {
    let url = 'http://localhost:8034/institution/getInstituteByUserId';
    return this.http.get(url+"/"+userId);
  }
}
