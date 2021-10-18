import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { SectionComponent } from './section/section.component';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HeroComponent,
    SectionComponent
  ],
  exports: [
    HeroComponent,
    SectionComponent,
    RouterModule,
    CommonModule,
    FontAwesomeModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
