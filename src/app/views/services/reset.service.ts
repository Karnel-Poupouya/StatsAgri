import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  user =new User();

  constructor(private http: HttpClient) { }

  reset(password,token): Observable<any> {
    const body = new HttpParams()
      .set('password', password)
      .set('token', token)
    return this.http.post('http://localhost:8080/reset',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }

}
