import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgamingPageComponent } from './progaming-page/progaming-page.component';
import {AthletesRoutingModule} from './athletes-routing.module';



@NgModule({
  declarations: [
    ProgamingPageComponent
  ],
  imports: [
    CommonModule,
    AthletesRoutingModule
  ]
})
export class AthletesModule { }
