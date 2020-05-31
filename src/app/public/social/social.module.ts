import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'
import { SocialRoutingModule } from './social-routing.module'

import { SocialComponent } from './social.component'

@NgModule({
  declarations: [SocialComponent],
  imports: [CommonModule, SharedModule, SocialRoutingModule],
})
export class SocialModule {}
