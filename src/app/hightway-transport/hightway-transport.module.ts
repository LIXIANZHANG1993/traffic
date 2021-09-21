import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HightwayTransportRoutingModule } from './hightway-transport-routing.module';
import { HightwayTransportComponent } from './hightway-transport.component';


@NgModule({
  declarations: [
    HightwayTransportComponent
  ],
  imports: [
    CommonModule,
    HightwayTransportRoutingModule
  ]
})
export class HightwayTransportModule { }
