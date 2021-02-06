import {Component, OnInit} from '@angular/core';
import {User} from "../services/user";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {first} from "rxjs/operators";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{
  user =new User();
  users:any
  currentn:any
  currentp:any

  msg:any

  ngOnInit() {

  }

  constructor( private _service:LoginService,
               private _router:Router
  ) {
  }

  public loginUser(){
    this._service.login(this.user.username, this.user.password)
      .pipe(first()).subscribe(
      data=>{
        // console.log("reponse recu",data)
        this.users=data
        if (this.users.data!=null)
        {
          console.log("reponse recu",this.users)
          this._router.navigate(['/dashboard'])

        }else
        {
          console.log("pas de reponse",this.users)
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
