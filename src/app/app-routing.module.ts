import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'progaming',
    loadChildren: () => import('./black-lion/athletes/athletes.module').then(m => m.AthletesModule)
  },
  {
    path: 'talented',
    loadChildren: () => import('./black-lion/talented/talented.module').then(m => m.TalentedModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./black-lion/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./black-lion/entrypoint/entrypoint-routing.module').then(m => m.EntrypointRoutingModule)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
