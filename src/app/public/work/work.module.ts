import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { WorkRoutingModule } from './work-routing.module';

import { WorkComponent } from './work.component';

@NgModule({
  declarations: [WorkComponent],
  imports: [
    CommonModule,
    SharedModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
