import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertRetraitPage } from './alert-retrait.page';

const routes: Routes = [
  {
    path: '',
    component: AlertRetraitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertRetraitPageRoutingModule {}
