import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import {PluviometrieService} from "../services/afficheServices/pluviometrie.service";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit {

  constructor(private service:PluviometrieService,private router:Router) {

  }

  ngOnInit(): void {
  }
  msg:any
  p1:any
  pluies:any
  public pluvio(){
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

}
