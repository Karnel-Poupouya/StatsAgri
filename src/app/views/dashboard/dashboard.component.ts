import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import {DatePipe, formatDate} from '@angular/common';
import 'jspdf-autotable';

@Component({
  templateUrl: 'dashboard.component.html',
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  public clicked3: boolean = false;
  myDate:any;


  radioModel: string = 'Superficie';

  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'p'
    }
  ];
  public lineChart1Labels: Array<any> = ['J', 'F', 'M', 'A', 'M', 'J', 'J'];
  public lineChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    {
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'S'
    }
  ];
  public lineChart2Labels: Array<any> = ['J', 'F', 'M', 'A', 'M', 'J', 'J'];
  public lineChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';


  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'A'
    }
  ];
  public lineChart3Labels: Array<any> = ['J', 'F', 'M', 'A', 'M', 'J', 'J'];
  public lineChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';


  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 8, 45, 34, 12, 40, 12, 40,80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'S',
      barPercentage: 0.6,
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // mainChart

  public mainChartElements = 30;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];
  public mainChartData4: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Superficie (Ha): '
    },
    {
      data: this.mainChartData2,
      label: 'Production (tonnes) : '
    },
    {
      data: this.mainChartData3,
      label: 'Exportation (tonnes) : '
    },
    {
      data: this.mainChartData4,
      label: 'Prix (F.CFA): '
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = ['1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020' ];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value;
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--primary'), 10),
      borderColor: getStyle('--primary'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: hexToRgba(getStyle('--success'), 10),
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor:hexToRgba(getStyle('--warning'), 10),
      borderColor: getStyle('--warning'),
      pointHoverBackgroundColor: '#fff',
    },
    { // brandDanger
      backgroundColor:hexToRgba(getStyle('--danger'), 10),
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  //

  public brandBoxChartColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public brandBoxChartLegend = false;
  public brandBoxChartType = 'line';

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
div3:any



//-----------------------------------------------------------------------------------------


  constructor(private http: HttpClient,private router:Router,private datePipe: DatePipe) {
    this.myDate=formatDate(new Date(), 'dd MMMM YYYY', 'fr');
  }

//variables

  msg:any
  p1:any
  pluies:any
  select:any="Mé"
  select1:any=2006
  select2:any=2020
  ms:any
  columns: string[] = [];
  div1:boolean=true;
  div2:boolean=true;



  //-------------------------------------------------------------------------------------

  pluviometri(): Observable<any> {
    const body = new HttpParams()
    return this.http.get('http://localhost:8080/pluviometrie/all?region='+this.select+'&annee='+ this.select1+''
    );
  }


  cacaoA(): Observable<any> {
    const body = new HttpParams()

    return this.http.get('http://localhost:8080/donnees/all?produit=Cacao&annee='+this.select2+''
    );
  }




  cacaoAff(): Observable<any> {
    const body = new HttpParams()
    return this.http.get('http://localhost:8080/donnees/all?region='+this.select+'&annee='+ this.select1+''
    );
  }


  cacaoTout(): Observable<any> {
    const body = new HttpParams()
    return this.http.get('http://localhost:8080/donnees/all?produit=Cacao'
    );
  }

//---------------------------------------------------------------------------------------------

voirDe(){
  this.div2=true;
}ss

  onGetPlui(){
    this.div1=true;
    this.cacaoAff()
      .pipe(first()).subscribe(
      data=>{
        // console.log("reponse recu",data)
        for( let i=0;i<data.data.length;i++)
        {
          this.barChartLabels[i]=data.data[i].localite.libelle
          this.barChartData[0].data[i]=data.data[i].superficieEstime
          this.barChartData[1].data[i]=data.data[i].exportation
          this.barChartData[2].data[i]=data.data[i].productionEstime
          this.barChartData[3].data[i]=data.data[i].prixProducteur
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

toutcacao:any

  onGetcacao(){

    this.cacaoTout()
      .pipe(first()).subscribe(
      data=>{
        // console.log("reponse recu",data)
        this.div3=true;

        this.toutcacao=data
        if (this.toutcacao!=null)
        {
          console.log("reponse recu toutcacao",this.toutcacao)
        }else
        {
          console.log("pas de reponse",this.toutcacao)
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
  public barChartLabels: string[] = ['DEFAULT'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65], label: 'Superficie (Ha)'},
    {data: [65], label: 'Production (Tonnes)'},
    {data: [65], label: 'Exportation (Tonnes)'},
    {data: [28], label: 'Prix (FCFA)'}
  ];



  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  selected = 'option1';

  cacao:any;
cacao1:any;
  cacaoPrix:any;
  cacaoProduction:any;
  cacaoSuperficie:any;
  cacaoExportation:any;
  cacaoAnnee:any;
  cacaoPrixex:any;
  cacaoprduit:any;
  cacaoTypeproduit:any;
  Affiche(){
    this.div2=true
  }


   public CacaoFun(){

     this.cacaoA()
       .pipe(first()).subscribe(
       data=>{
         // console.log("reponse recu",data)
         this.cacao=data
         if (this.cacao!=null)
         {
           this.div2=false;
           this.cacao1=this.cacao.data[0];
           this.cacaoPrix=this.cacao1.prixProducteur
           this.cacaoSuperficie=this.cacao1.superficieEstime
           this.cacaoExportation=this.cacao1.exportation
           this.cacaoProduction=this.cacao1.productionEstime
           this.cacaoAnnee=this.cacao1.annee.libelle
           this.cacaoprduit=this.cacao1.produit.libelle
           this.cacaoTypeproduit=this.cacao1.produit.typeProduit.libelle
           this.cacaoPrixex=this.cacao1.prixExportation
           console.log("reponse recu",this.cacao1)
         }else
         {
           console.log("pas de reponse",this.cacao)
           this.msg="Connexion echouée, e-mail ou mot de passe erroné!";
         }
       },
       message=>{
         console.log("pas de reponse",message);
         this.msg="Impossible de se connecter au serveur...";
       }
     )
   }

  gPdf() {
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
    doc.text("STATISTIQUES DE LA FILIERE CACAO DE L'ANNEE "+this.select1+" CONCERNANT LA REGION "+this.select, 40, 70);

    (doc as any).autoTable({ html: '#tab',
      startY: 75,});
    doc.text("STATISTIQUES DE LA FILIERE CACAO DE L'ANNEE "+this.select1+" CONCERNANT LA REGION "+this.select, 24, 160);


    let canvas = document.getElementById('cann') as HTMLCanvasElement;
    let canvasImg = canvas.toDataURL("image/jpg", 1.0);
    doc.addImage(canvasImg, 'JPEG', 10, 165, 190, 100 );

    doc.save("Statistiques_Cacao_"+this.select+"_"+this.select1+".pdf");
  }




  g1Pdf() {
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
    doc.text("STATISTIQUES DE LA FILIERE CACAO DE L'ANNEE "+this.select1+" CONCERNANT LA REGION "+this.select, 40, 70);

    (doc as any).autoTable({ html: '#tab1',
      startY: 75,});

    doc.save("Historique_cacao_"+this.select+"_"+this.select1+".pdf");
  }




  g2Pdf() {
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
    doc.text("STATISTIQUES DE LA FILIERE CACAO DE L'ANNEE "+this.select1+" CONCERNANT LA REGION "+this.select, 40, 70);

    (doc as any).autoTable({ html: '#tab2',
      startY: 75,});

    doc.save("cacao_"+this.select+"_"+this.select1+".pdf");
  }



  ngOnInit(): void {
    // generate random values for mainChart
      this.div1=false;
      this.div2=false;
      this.div3=false;
      this.CacaoFun();
      this.data1();

    }

  /*  public data1(){
      for (let i = 0; i <= this.mainChartElements; i++) {
        this.mainChartData1.push(this.random(10000, 102000));
        //document.getElementById('option1').style.display='block';
      }
    }

     public data2(){
      for (let i = 0; i <= this.mainChartElements; i++) {
        this.mainChartData2.push(this.random(8000, 102000));
      }
    }

    public data3(){
      for (let i = 0; i <= this.mainChartElements; i++) {
        this.mainChartData3.push(this.random(5000, 102000));
      }
    }

   public data4(){
      for (let i = 0; i <= this.mainChartElements; i++) {
        this.mainChartData4.push(this.random(1000, 102000));
      }
    }
  */
  //-------------------------------------------------------------------------------------------------------

  data1(){
    this.cacaoTout()
      .pipe(first()).subscribe(
      data=>{
        // console.log("reponse recu",data)
        for ( let i=0;i<data.data.length;i++)
        {
          this.mainChartData1.push( data.data[i].superficieEstime );
        }
      },
    )
  }

  //---------------------------------

  data2(){
    this.cacaoTout()
      .pipe(first()).subscribe(
      data=>{
        // console.log("reponse recu",data)
        for ( let i=0;i<data.data.length;i++)
        {
          this.mainChartData2.push( data.data[i].productionEstime );
        }
      },
    )
  }

  //------------
  data3(){
    this.cacaoTout()
      .pipe(first()).subscribe(
      data=>{
        // console.log("reponse recu",data)
        for ( let i=0;i<data.data.length;i++)
        {
          this.mainChartData3.push( data.data[i].exportation );
        }
      },
    )
  }

  //------------


  data4(){
    this.cacaoTout()
      .pipe(first()).subscribe(
      data=>{
        // console.log("reponse recu",data)
        for ( let i=0;i<data.data.length;i++)
        {
          this.mainChartData4.push( data.data[i].prixExportation );
        }
      },
    )
  }

}
