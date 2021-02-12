import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(private http: HttpClient) {
  }


  getAll() {
    return this.http.get<User[]>('http://localhost:8080/login');
  }
  user:any

  login(username, password): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    /* return this.http.post('http://localhost:8080/login',
       body.toString(),
       {
         headers: new HttpHeaders()
           .set('Content-Type', 'application/x-www-form-urlencoded')
       }
     )  .pipe(map(user => {
       // store user details and jwt token in local storage to keep user logged in between page refreshes
       localStorage.setItem('currentUser', JSON.stringify(user));
       this.currentUserSubject.next(user);
       return user;
     })); */
    return this.http.post<any>('http://localhost:8080/login',  body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      })

  }
}
