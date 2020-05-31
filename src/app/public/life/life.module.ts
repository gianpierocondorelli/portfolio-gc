import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'
import { LifeComponent } from './life.component'
import { LifeRoutingModule } from './life-routing.module'

@NgModule({
  declarations: [LifeComponent],
  imports: [CommonModule, SharedModule, LifeRoutingModule],
})
export class LifeModule {}
