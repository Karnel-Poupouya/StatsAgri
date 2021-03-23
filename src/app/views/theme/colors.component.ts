import { Component, Inject, OnInit } from '@angular/core';
import {DatePipe, DOCUMENT} from '@angular/common';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import {PluviometrieService} from "../services/afficheServices/pluviometrie.service";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { ViewChild, ElementRef } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import {formatDate} from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

@Component({
  templateUrl: 'colors.component.html',
  providers: [DatePipe]

})
export class ColorsComponent implements OnInit {
  myDate:any

  constructor(private http: HttpClient,private router:Router,private datePipe: DatePipe) {
    this.myDate=formatDate(new Date(), 'dd MMMM YYYY', 'fr');
  }

//variables
  msg:any
  p1:any
  pluies:any
  p_select:any="Mé"
  p1_select:any=2006
ms:any
  columns: string[] = [];
  data1: string[] = [];

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
  generatePdf(data) {
    html2canvas(data, { allowTaint: true }).then(canvas => {
      let HTML_Width = canvas.width;
      let HTML_Height = canvas.height;
      let top_left_margin = 5;
      let PDF_Width = HTML_Width + (top_left_margin * 2);
      let PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
      let canvas_image_width = HTML_Width;
      let canvas_image_height = HTML_Height;
      let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
      canvas.getContext('2d');

      let imgData = canvas.toDataURL("image/jpeg", 1.0);
      let pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
      for (let i = 1; i <= totalPDFPages; i++) {
        pdf.addPage([PDF_Width, PDF_Height], 'p');
        pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
      }
      pdf.save("pluviometrie_"+this.p_select+"_"+this.p1_select+".pdf");
    });
  }


  onExportClick()
  {
    const options={
      filename:"pluviometrie.pdf",
      image:{type:'jpeg'},
      html2canvas:{},
      jsPDF:{orientation:"landscape"}

    };
    const content:Element=document.getElementById("element_to_export");
    jsPDF(content,options)
      .from(content)
      .set(options)
      .save();*/

  createPdf() {
    var doc = new jsPDF();

    doc.setFontSize(10);
    doc.text("MINISTERE DE L'AGRICULTURE", 11, 12);
    doc.text('ET DU DEVELOPPEMENT RURAL', 11, 16);
    doc.text('-------------------------', 23, 19);
    doc.text("DIRECTION GENERALE DE LA ", 11, 25);
    doc.text("PLANIFICATION, DES STATISTIQUES ", 11, 29);
    doc.text("ET DES PROJETS", 11, 33);
    doc.text('-------------------------', 23, 36);
    doc.text("DIRECTION DES STATISTIQUES,", 11, 42);
    doc.text("DE LA DOCUMENTATION ET DE ", 11, 46);
    doc.text("L'INFORMATIQUE", 11, 50);
    doc.text('-------------------------', 23, 53);
    doc.text("REPUBLIQUE DE COTE D'IVOIRE ", 140, 25);
    doc.text("Union-Discipline-Travail ", 150, 29);
    doc.text('-----------------------', 155, 34);
    doc.text("Abidjan, le "+this.myDate, 150, 50);
    doc.text("PLUVIOMETRIE DE L'ANNEE "+this.p1_select+" CONCERNANT LA REGION "+this.p_select, 40, 70);

    (doc as any).autoTable({ html: '#tabl',
      startY: 75,});
    doc.text("STATISTIQUES PLUVIOMETRIQUES DE L'ANNEE "+this.p1_select+" CONCERNANT LA REGION "+this.p_select, 24, 160);


   let canvas = document.getElementById('cann') as HTMLCanvasElement;
   let canvasImg = canvas.toDataURL("image/jpg", 1.0);
   doc.addImage(canvasImg, 'JPEG', 10, 165, 190, 100 );

    doc.save("pluviometrie_"+this.p_select+"_"+this.p1_select+".pdf");
  }

}
