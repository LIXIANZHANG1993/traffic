import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TayouanMRTRoutingModule } from './tayouan-mrt-routing.module';
import { TayouanMRTComponent } from './tayouan-mrt.component';


@NgModule({
  declarations: [
    TayouanMRTComponent
  ],
  imports: [
    CommonModule,
    TayouanMRTRoutingModule
  ]
})
export class TayouanMRTModule { }
