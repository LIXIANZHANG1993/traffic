import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaipeiMRTRoutingModule } from './taipei-mrt-routing.module';
import { TaipeiMRTComponent } from './taipei-mrt.component';
import { FormsModule } from '@angular/forms';

import { Shared } from '../shared';
import { taipeiMRTService } from './taipeiMRT.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TaipeiMRTComponent],
  imports: [
    CommonModule,
    TaipeiMRTRoutingModule,
    Shared,
    FormsModule,
    HttpClientModule,
  ],
  providers: [taipeiMRTService],
})
export class TaipeiMRTModule {}
