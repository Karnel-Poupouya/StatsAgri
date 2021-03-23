// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { PluvioComponent } from './pluvio/pluvio.component';
import {FormsModule} from "@angular/forms";
import {ChartsModule} from "ng2-charts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThemeRoutingModule,
    ChartsModule
  ],
  declarations: [
  ColorsComponent,
    TypographyComponent,
    PluvioComponent
  ]
})
export class ThemeModule {
  constructor() {
    registerLocaleData(localeFr, 'fr');
}
}
