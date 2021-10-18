import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityPageComponent } from './community-page/community-page.component';
import {CommunityRoutingModule} from './community-routing.module';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    CommunityPageComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    SharedModule
  ]
})
export class CommunityModule { }
