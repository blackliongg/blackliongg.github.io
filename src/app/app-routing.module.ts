import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

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
    path: 'community',
    loadChildren: () => import('./black-lion/community/community.module').then(m => m.CommunityModule)
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
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
