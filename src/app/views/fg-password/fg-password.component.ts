import { Component, OnInit } from '@angular/core';
import {User} from "../services/user";
import {FgPasswordService} from "../services/fg-password.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fg-password',
  templateUrl: './fg-password.component.html',
  styleUrls: ['./fg-password.component.scss']
})
export class FgPasswordComponent implements OnInit {
  user =new User();
  msg="";
  users:any
  ngOnInit(): void {
  }
  constructor( private _service:FgPasswordService, private _router:Router) {

  }


  fgUser(){
    this._service.fg(this.user.username)
      .subscribe(

        data=>{
          this.users=data

          if (this.users.data!=null)
          {
            console.log("reponse recu",data)
            this.msg="Un lien de reinitialisation a ete envoyé a votre compte e-mail";
          }else
          {
            console.log("pas de reponse",this.users)
            this.msg="Connexion echouée, e-mail inexistant!";
          }
        },
        error =>{
          console.log("pas de reponse",error);
          this.msg="Veuillez Verifier votre connexion internet svp!";
        }
      )
  }

}

