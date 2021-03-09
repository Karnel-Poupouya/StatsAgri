import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons.component';
import { DropdownsComponent } from './dropdowns.component';
import { BrandButtonsComponent } from './brand-buttons.component';
import {MilComponent} from './mil/mil.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: '',
        redirectTo: 'buttons'
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons'
        }
      },

      {
        path: 'dropdowns',
        component: DropdownsComponent,
        data: {
          title: 'Dropdowns'
        }
      },
      {
        path: 'brand-buttons',
        component: BrandButtonsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'Mil',
        component: MilComponent,
        data: {
          title: 'mil'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {}
