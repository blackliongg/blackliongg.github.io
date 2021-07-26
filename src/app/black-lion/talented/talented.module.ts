import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalentedPageComponent } from './talented-page/talented-page.component';
import {TalentedRoutingModule} from './talented-routing.module';



@NgModule({
  declarations: [
    TalentedPageComponent
  ],
  imports: [
    CommonModule,
    TalentedRoutingModule
  ]
})
export class TalentedModule { }
