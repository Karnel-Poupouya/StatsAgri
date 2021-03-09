import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'typography.component.html'
})
export class TypographyComponent{


  constructor() {

  }


  title = 'export-table-data-to-pdf-using-jspdf-example';

  head = [['ID', 'NAME', 'DESIGNATION', 'DEPARTMENT']]

  data = [
    [1, 'ROBERT', 'SOFTWARE DEVELOPER', 'ENGINEERING'],
    [2, 'CRISTINAO','QA', 'TESTING'],
    [3, 'KROOS','MANAGER', 'MANAGEMENT'],
    [4, 'XYZ','DEVELOPER', 'DEVLOPEMENT'],
    [5, 'ABC','CONSULTANT', 'HR'],
    [73, 'QWE','VICE PRESIDENT', 'MANAGEMENT'],
  ]

  createPdf() {
    var doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('My Team Detail', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);


    (doc as any).autoTable({
      head: this.head,
      body: this.data,
      theme: 'plain',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    })

    // below line for Open PDF document in new tab
    doc.output('dataurlnewwindow')

    // below line for Download PDF document
    doc.save('myteamdetail.pdf');
  }

}
