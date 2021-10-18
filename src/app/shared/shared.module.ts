import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { SectionComponent } from './section/section.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    HeroComponent,
    SectionComponent
  ],
  exports: [
    HeroComponent,
    SectionComponent,
    RouterModule,
    CommonModule
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
