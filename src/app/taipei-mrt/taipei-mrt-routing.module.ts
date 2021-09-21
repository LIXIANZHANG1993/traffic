import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaipeiMRTComponent } from './taipei-mrt.component';

const routes: Routes = [{ path: '', component: TaipeiMRTComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaipeiMRTRoutingModule { }
