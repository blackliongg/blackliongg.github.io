import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgamingPageComponent } from './progaming-page/progaming-page.component';
import {AthletesRoutingModule} from './athletes-routing.module';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    ProgamingPageComponent
  ],
  imports: [
    CommonModule,
    AthletesRoutingModule,
    SharedModule
  ]
})
export class AthletesModule { }
