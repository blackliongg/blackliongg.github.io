import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalentedPageComponent } from './talented-page/talented-page.component';
import {TalentedRoutingModule} from './talented-routing.module';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    TalentedPageComponent
  ],
  imports: [
    CommonModule,
    TalentedRoutingModule,
    SharedModule
  ]
})
export class TalentedModule { }
