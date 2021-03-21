import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculateurPage } from './calculateur.page';

const routes: Routes = [
  {
    path: '',
    component: CalculateurPage
  },
  {
    path: 'freez',
    loadChildren: () => import('./freez/freez.module').then( m => m.FreezPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculateurPageRoutingModule {}
