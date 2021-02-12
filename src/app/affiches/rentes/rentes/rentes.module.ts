import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentesRoutingModule } from './rentes-routing.module';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {FormsModule} from "@angular/forms";
import {CacaoComponent} from "../cacao/cacao.component";
import {CafeComponent} from "../cafe/cafe.component";


@NgModule({
  declarations: [
    CacaoComponent,
    CafeComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ]
})
export class RentesModule { }
