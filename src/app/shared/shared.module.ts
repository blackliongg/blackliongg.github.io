import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [
    HeroComponent,
    SectionComponent
  ],
  exports: [
    HeroComponent,
    SectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
