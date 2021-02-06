import { Component, OnInit } from '@angular/core';
import {PluviometrieService} from "../services/afficheServices/pluviometrie.service";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-pluviometrie',
  templateUrl: './pluviometrie.component.html',
  styleUrls: ['./pluviometrie.component.scss']
})
export class PluviometrieComponent implements OnInit {

  constructor(private service:PluviometrieService,private router:Router) {

  }

  ngOnInit(): void {
  }
msg:any
pluies:any
  public pluvio(){
    this.service.pluviometrie()
      .pipe(first()).subscribe(
      data=>{
        // console.log("reponse recu",data)
        this.pluies=data
        if (this.pluies.data!=null)
        {
          console.log("reponse recu",this.pluies)
          this.router.navigate(['/dashboard'])

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
