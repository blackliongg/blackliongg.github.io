import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TalentedPageComponent} from './talented-page/talented-page.component';

const routes: Routes = [
  {
    path: '',
    component: TalentedPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentedRoutingModule { }
