import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaipeiMRTRoutingModule } from './taipei-mrt-routing.module';
import { TaipeiMRTComponent } from './taipei-mrt.component';

import { Shared } from '../shared';
@NgModule({
  declarations: [TaipeiMRTComponent],
  imports: [CommonModule, TaipeiMRTRoutingModule, Shared],
})
export class TaipeiMRTModule {}
