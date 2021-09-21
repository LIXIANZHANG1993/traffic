import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HightwayTransportComponent } from './hightway-transport.component';

const routes: Routes = [{ path: '', component: HightwayTransportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HightwayTransportRoutingModule { }
