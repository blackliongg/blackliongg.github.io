import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProgamingPageComponent} from './progaming-page/progaming-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProgamingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthletesRoutingModule { }
