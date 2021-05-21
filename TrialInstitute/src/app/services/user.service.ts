import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modules/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(user:User):Observable<any>
  {

    let url='http://localhost:8034/User/login';
    return this.http.put(url,user,{responseType:'text'});
  }

  logout(userId:string):Observable<any>
  {
    let url='http://localhost:8034/User/logout';
    return this.http.put(url,userId,{responseType:'text'});
  }
}
