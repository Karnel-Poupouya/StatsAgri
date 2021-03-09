import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
@Component({
  templateUrl: '500.component.html'
})
export class P500Component {

  constructor() { }
/*

generate(enhance) {
   var  group1='1';
   var  group2='';
   var  group3='1';
 var displayposition='left'
    //const doc = new jsPDF('l', 'mm');
    const doc = new jsPDF('p', 'pt', 'a4');
    var i=0;
    if(group1.length){
      i+=1;
      if ( i % 2 == 0) {
        displayposition='left';
      }else{
        displayposition='right';
      }

      var res = doc.autoTableHtmlToJson(document.getElementById('geo_summarynew'));
      doc.text("Pipeline as of july",7, 15);
      (doc as any).autoTable(res.columns, res.data,{

        startY: 30,
        showHead: 'firstPage',
        styles: { overflow: 'hidden' ,fontSize:5},
        margin: { right: 305 },
      });}
    if(group2.length){
      i+=1;
      if ( i % 2 == 0) {
        displayposition='left';
      }else{
        displayposition='right';
      }
      var res3 = doc.autoTableHtmlToJson(document.getElementById('group2new'));
      doc.text("close won ",300, 15 );
      (doc as any).autoTable(res3.columns, res3.data,{

        startY: 30,
        showHead: 'firstPage',
        styles: { overflow: 'hidden',fontSize:5 },
        margin: { left: 305 },
      });}
    if(group3.length){
      i+=1;
      if ( i % 2 == 0) {
        displayposition='left';
      }else{
        displayposition='right';
      }
      var res4 = doc.autoTableHtmlToJson(document.getElementById('group3new'));

      let start_y = 30;
      let margin_left = 0;
      let margin_right = 0;
      if(group2.length){
        start_y = doc.lastAutoTable.finalY + 50;
        margin_right = 305;
        margin_left = 40;
      }
      else{
        margin_left = 305;
        margin_right = 40;
      }

      (doc as any).autoTable(res4.columns, res4.data,{

        startY: start_y,
        showHead: 'firstPage',
        styles: { overflow: 'hidden' ,fontSize:5},
        margin: { left: margin_left, right: margin_right },
      });
    }
    doc.save('test Report');
  }
*/
}
