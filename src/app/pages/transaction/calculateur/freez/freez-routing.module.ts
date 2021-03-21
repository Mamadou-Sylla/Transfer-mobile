import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreezPage } from './freez.page';

const routes: Routes = [
  {
    path: '',
    component: FreezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreezPageRoutingModule {}
