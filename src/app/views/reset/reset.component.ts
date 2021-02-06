import { Component, OnInit } from '@angular/core';
import {User} from "../services/user";
import {ResetService} from "../services/reset.service";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  user =new User();
  msg="";


  constructor( private _service:ResetService,
               private _router:Router,
               private  route:ActivatedRoute) {

    this.token=this.route.params.subscribe(params=>params.token)

  }


  token:any

  ngOnInit() {
    this.route.queryParams
      .pipe(map(params => params.token))
      .subscribe(params => {console.log(params); // { order: "popular" }

          this.token= params;
          console.log(this.token); // popular
        }
      );
  }

  users:any;

  resetUser(){
    this._service.reset(this.user.password,this.token)
      .subscribe(

        data=>{

          this.users=data
          this.msg="Felicitation,Votre mot de passe a été réinitialisé avec succes!"
          if (this.users.status==401)
          {
            this.msg=this.users.message

          }else
            setTimeout(() => {
              this._router.navigate([""])
            }, 3000)

        },
        error =>{
          this.msg="Impossible de réinitialiser ce mot de passe, Verifiez votre connexion internet...";
        }
      )

  }

}
