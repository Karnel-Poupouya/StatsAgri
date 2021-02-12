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

    return this.http.get('http://localhost:8080/pluviometrie/all?region=Mé&annee=2006'
    );
  }

}
