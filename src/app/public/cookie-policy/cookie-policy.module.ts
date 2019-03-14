import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiePolicyComponent } from './cookie-policy.component';
import { SharedModule } from '@shared/shared.module';
import { CookiePolicyRoutingModule } from './cookie-policy-routing.module';

@NgModule({
  declarations: [CookiePolicyComponent],
  imports: [
    CommonModule,
    SharedModule,
    CookiePolicyRoutingModule
  ]
})
export class CookiePolicyModule { }
