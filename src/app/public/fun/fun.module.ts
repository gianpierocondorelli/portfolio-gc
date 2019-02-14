import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunComponent } from './fun.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FunRoutingModule } from './fun-routing.module';

@NgModule({
  declarations: [FunComponent],
  imports: [
    CommonModule,
    SharedModule,
    FunRoutingModule
  ]
})
export class FunModule { }
