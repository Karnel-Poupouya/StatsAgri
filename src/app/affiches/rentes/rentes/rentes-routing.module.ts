import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ButtonsComponent} from "../../../views/buttons/buttons.component";
import {DropdownsComponent} from "../../../views/buttons/dropdowns.component";
import {BrandButtonsComponent} from "../../../views/buttons/brand-buttons.component";
import {CacaoComponent} from "../cacao/cacao.component";
import {CafeComponent} from "../cafe/cafe.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Cultures'
    },
    children: [
      {
        path: '',
        redirectTo: 'cultures'
      },
      {
        path: 'cacao',
        component: CacaoComponent,
        data: {
          title: 'Cacao'
        }
      },
      {
        path: 'cafe',
        component: CafeComponent,
        data: {
          title: 'Cafe'
        }
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentesRoutingModule { }
