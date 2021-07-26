import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthletesFirstPageComponent } from './athletes-first-page/athletes-first-page.component';
import { DiversityPageComponent } from './diversity-page/diversity-page.component';
import { InclusionPageComponent } from './inclusion-page/inclusion-page.component';



@NgModule({
  declarations: [
    AthletesFirstPageComponent,
    DiversityPageComponent,
    InclusionPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConceptsModule { }
