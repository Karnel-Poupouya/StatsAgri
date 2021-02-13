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
ms:any
  columns: string[] = [];

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
      for ( let i=0;i<data.data.length;i++)
      {
        this.barChartLabels[i]=data.data[i].localite.libelle
        this.barChartData[0].data[i]=data.data[i].hauteurPluieAnnuelle
        this.barChartData[1].data[i]=data.data[i].nbJourPluie
      }

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

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['AGOU', 'ADZOPE', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55,51, 40], label: 'Hauteur annuelle de pluie (mm)'},
    {data: [28, 48, 40, 19, 86, 27, 25, 90], label: 'Nombre de jour de pluie /an (jours)'}
  ];



  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
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
