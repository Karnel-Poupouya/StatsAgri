import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FgPasswordService {

  user =new User();



  constructor(private http: HttpClient) { }

  fg(username): Observable<any> {
    const body = new HttpParams()
      .set('username', username);

    return this.http.post('http://192.168.137.88:8080/passreset',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
}
