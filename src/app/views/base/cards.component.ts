import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  templateUrl: 'cards.component.html'
})
export class CardsComponent {

  radioModel: string = 'Month';

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
      label: 'Production (Tonnes):'
    },
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
          stepSize: Math.ceil(102250 / 5),
          max: 102250
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
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  // s

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



  constructor(private http: HttpClient,private router:Router) {

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

    return this.http.get('http://localhost:8080/donnees/all?libProduit=Cacao&libAnnee='+this.select2+''
    );
  }



  cacaoTout(): Observable<any> {
    const body = new HttpParams()

    return this.http.get('http://localhost:8080/donnees/all?libProduit=Cacao'
    );
  }

//---------------------------------------------------------------------------------------------

  voirDe(){
    this.div2=true;
  }




  onGetPlui(){
    this.div1=true;
    this.pluviometri()
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

  toutcacao:any

  onGetcacao(){
    this.div1=true;
    this.cacaoTout()
      .pipe(first()).subscribe(
      data=>{
        // console.log("reponse recu",data)
        this.div3=true;
        for ( let i=0;i<data.data.length;i++)
        {
          this.barChartLabels[i]=data.data[i].localite.libelle
          this.barChartData[0].data[i]=data.data[i].hauteurPluieAnnuelle
          this.barChartData[1].data[i]=data.data[i].nbJourPluie
        }

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







  selected = 'option2';

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

  gPdf(data) {
    html2canvas(data, { allowTaint: true }).then(canvas => {
      let HTML_Width = canvas.width;
      let HTML_Height = canvas.height;
      let top_left_margin = 15;
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
      pdf.save("pluviometrie_"+this.select+"_"+this.select1+".pdf");
    });
  }

  ngOnInit(): void {
    // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData1.push(this.random(10000, 102000));
      this.div1=false;
      this.div2=false;
      this.div3=false;
      this.CacaoFun();

      this.datasets = [
        [0, 20, 10, 30, 15, 40, 20, 60, 60],
        [0, 20, 5, 25, 10, 30, 15, 40, 40]
      ];
      this.data = this.datasets[0];
    }

  }


  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
