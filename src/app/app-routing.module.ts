import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'depot',
    loadChildren: () => import('./pages/transaction/depot/depot.module').then( m => m.DepotPageModule)
  },
  {
    path: 'retrait',
    loadChildren: () => import('./pages/transaction/retrait/retrait.module').then( m => m.RetraitPageModule)
  },
  {
    path: 'alert-depot',
    loadChildren: () => import('./pages/transaction/alert-depot/alert-depot.module').then( m => m.AlertDepotPageModule)
  },
  {
    path: 'alert-retrait',
    loadChildren: () => import('./pages/transaction/alert-retrait/alert-retrait.module').then( m => m.AlertRetraitPageModule)
  },
  {
    path: 'list-transactions',
    loadChildren: () => import('./pages/transaction/list-transactions/list-transactions.module').then( m => m.ListTransactionsPageModule)
  },
  {
    path: 'all-transactions',
    loadChildren: () => import('./pages/transaction/all-transactions/all-transactions.module').then( m => m.AllTransactionsPageModule)
  },
  {
    path: 'commission',
    loadChildren: () => import('./pages/transaction/commission/commission.module').then( m => m.CommissionPageModule)
  },
  {
    path: 'calculateur',
    loadChildren: () => import('./pages/transaction/calculateur/calculateur.module').then( m => m.CalculateurPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
