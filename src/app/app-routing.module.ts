import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'taipeiMRT' },
  {
    path: 'taipeiMRT',
    loadChildren: () =>
      import('./taipei-mrt/taipei-mrt.module').then((m) => m.TaipeiMRTModule),
  },
  {
    path: 'tayouanMRT',
    loadChildren: () =>
      import('./tayouan-mrt/tayouan-mrt.module').then(
        (m) => m.TayouanMRTModule
      ),
  },
  {
    path: 'hightwayTransport',
    loadChildren: () =>
      import('./hightway-transport/hightway-transport.module').then(
        (m) => m.HightwayTransportModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
