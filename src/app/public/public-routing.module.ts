import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'life',
  loadChildren: 'src/app/public/life/life.module#LifeModule'
},
{
  path: 'travel',
  loadChildren: 'src/app/public/travel/travel.module#TravelModule'
},
{
  path: 'social',
  loadChildren: 'src/app/public/social/social.module#SocialModule'
},
{
  path: 'work',
  loadChildren: 'src/app/public/work/work.module#WorkModule'
},
{
  path: 'cookie-policy',
  loadChildren: 'src/app/public/cookie-policy/cookie-policy.module#CookiePolicyModule'
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
