import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import {PluviometrieService} from "../services/afficheServices/pluviometrie.service";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit {

  constructor(private http: HttpClient,private router:Router) {

  }

//variables

  msg:any
  p1:any
  pluies:any
  p_select:any="Mé"
  p1_select:any=2006

  ngOnInit(): void {
    this.div1=false;
  }
  div1:boolean=true;



  //-------------------------------------------------------------------------------------

  pluviometrie(): Observable<any> {
    const body = new HttpParams()

    return this.http.get('http://localhost:8080/pluviometrie/all?region='+this.p_select+'&annee='+ this.p1_select+''
    );
  }

//---------------------------------------------------------------------------------------------
  onGetPluivio(){
  this.div1=true;
  this.pluviometrie()
    .pipe(first()).subscribe(
    data=>{
      // console.log("reponse recu",data)
      this.pluies=data
      if (this.pluies!=null)
      {
        console.log("reponse recu",this.pluies)
      }else
      {
        console.log("pas de reponse",this.pluies)
        this.msg="Connexion echouée, e-mail ou mot de passe erroné!";
      }
    },
    message=>{
      console.log("pas de reponse",message);
      this.msg="Impossible de se connecter au serveur...";
    }
  )
}
 /* public pluvio(){
    this.service.pluviometrie()
      .pipe(first()).subscribe(
      data=>{
        // console.log("reponse recu",data)
        this.pluies=data
        if (this.pluies!=null)
        {
          console.log("reponse recu",this.pluies)
        }else
        {
          console.log("pas de reponse",this.pluies)
          this.msg="Connexion echouée, e-mail ou mot de passe erroné!";
        }
      },
      message=>{
        console.log("pas de reponse",message);
        this.msg="Impossible de se connecter au serveur...";
      }
    )
  }
*/
}
