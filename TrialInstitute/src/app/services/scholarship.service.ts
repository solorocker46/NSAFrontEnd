import { Injectable } from '@angular/core';
import { Scholarship } from '../modules/scholarship';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipService {

  constructor(private http:HttpClient) { }

  addScholarship(scholarship:Scholarship):Observable<any>
  {
    let url = 'http://localhost:8034/scholarship/addScholarshipDetails';
    return this.http.post(url, scholarship, {responseType:'text'});
  }
  getAllScholarships():Observable<any>
  {
    let url = 'http://localhost:8034/scholarship/getAllScholarships';
    return this.http.get(url);
  }
}
