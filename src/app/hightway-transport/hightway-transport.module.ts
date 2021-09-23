import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HightwayTransportRoutingModule } from './hightway-transport-routing.module';
import { HightwayTransportComponent } from './hightway-transport.component';
import { Shared } from '../shared';

@NgModule({
  declarations: [HightwayTransportComponent],
  imports: [CommonModule, HightwayTransportRoutingModule, Shared],
})
export class HightwayTransportModule {}
