import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ImprintPageComponent } from './imprint-page/imprint-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';
import {EntrypointRoutingModule} from './entrypoint-routing.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    ImprintPageComponent,
    PrivacyPolicyPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EntrypointRoutingModule
  ],
  exports: [
    RouterModule,
    HomePageComponent
  ]
})
export class EntrypointModule { }
