import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProComponent} from './pro.component';
import {ProRoutingModule} from './pro-routing.module';



@NgModule({
  declarations: [
    ProComponent
  ],
  imports: [
    CommonModule,
    ProRoutingModule
  ]
})
export class ProModule { }
