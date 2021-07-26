import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import {AboutRoutingModule} from './about-routing.module';
import { NewsroomPageComponent } from './newsroom-page/newsroom-page.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    NewsroomPageComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
