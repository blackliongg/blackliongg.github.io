import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {PrivacyPolicyPageComponent} from './privacy-policy-page/privacy-policy-page.component';
import {ImprintPageComponent} from './imprint-page/imprint-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyPageComponent
  },
  {
    path: 'imprint',
    component: ImprintPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrypointRoutingModule {
}
