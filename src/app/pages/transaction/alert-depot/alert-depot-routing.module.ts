import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertDepotPage } from './alert-depot.page';

const routes: Routes = [
  {
    path: '',
    component: AlertDepotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertDepotPageRoutingModule {}
