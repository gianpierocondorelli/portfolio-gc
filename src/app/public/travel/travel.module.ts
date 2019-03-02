import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelComponent } from './travel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TravelRoutingModule } from './travel-routing.module';

@NgModule({
  declarations: [TravelComponent],
  imports: [
    CommonModule,
    SharedModule,
    TravelRoutingModule
  ]
})
export class TravelModule { }
