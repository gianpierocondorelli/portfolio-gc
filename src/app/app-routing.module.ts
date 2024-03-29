import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { NotFoundComponent } from './shared/not-found/not-found.component'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('app/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
