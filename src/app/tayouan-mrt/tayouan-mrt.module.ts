import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TayouanMRTRoutingModule } from './tayouan-mrt-routing.module';
import { TayouanMRTComponent } from './tayouan-mrt.component';

import { Shared } from '../shared';
@NgModule({
  declarations: [TayouanMRTComponent],
  imports: [CommonModule, TayouanMRTRoutingModule, Shared],
})
export class TayouanMRTModule {}
