import { Injectable } from '@angular/core';
import {User} from "./user";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  user =new User();



  constructor(private http: HttpClient) { }

  register(username, password,nom,prenom): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('nom', nom)
      .set('prenom', prenom);

    return this.http.post('http://192.168.137.88:8080/register',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }


}
