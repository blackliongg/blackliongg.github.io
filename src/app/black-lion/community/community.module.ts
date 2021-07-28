import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityPageComponent } from './community-page/community-page.component';
import {CommunityRoutingModule} from './community-routing.module';



@NgModule({
  declarations: [
    CommunityPageComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule
  ]
})
export class CommunityModule { }
