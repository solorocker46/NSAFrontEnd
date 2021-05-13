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
}
