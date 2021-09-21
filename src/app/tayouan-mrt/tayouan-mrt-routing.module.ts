import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TayouanMRTComponent } from './tayouan-mrt.component';

const routes: Routes = [{ path: '', component: TayouanMRTComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TayouanMRTRoutingModule {}
