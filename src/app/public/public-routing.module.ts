import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'life',
  loadChildren: () => import('src/app/public/life/life.module').then(m => m.LifeModule)
},
{
  path: 'travel',
  loadChildren: () => import('src/app/public/travel/travel.module').then(m => m.TravelModule)
},
{
  path: 'social',
  loadChildren: () => import('src/app/public/social/social.module').then(m => m.SocialModule)
},
{
  path: 'work',
  loadChildren: () => import('src/app/public/work/work.module').then(m => m.WorkModule)
},
{
  path: 'cookie-policy',
  loadChildren: () => import('src/app/public/cookie-policy/cookie-policy.module').then(m => m.CookiePolicyModule)
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule {
}
