import { Component } from '@angular/core';
import {User} from "../services/user";
import {RegisterService} from "../services/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  user =new User();
  msg="";

  constructor(private _service:RegisterService, private _router:Router) {

  }

  ngOnInit() {
  }
  users:any
  registerUser(){

    this._service.register(this.user.username, this.user.password,this.user.nom, this.user.prenom)
      .subscribe(

        data=>{

          this.users=data
          this.msg="Felicitation,Votre compte a été crée avec success !"
          if (this.users.message!="")
          {
            this.msg=this.users.message

          }else
            setTimeout(() => {
              this._router.navigate([""])
            }, 3000)

        },
        error =>{
          this.msg="Erreur d'inscription...";
        }
      )
  }







}




