import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PluviometrieService {

  constructor(private http: HttpClient) { }

  pluviometrie(): Observable<any> {
    const body = new HttpParams()

    return this.http.get('http://192.168.137.88:8080/pluviometrie/all'
    );
  }

}
