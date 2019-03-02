import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
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
