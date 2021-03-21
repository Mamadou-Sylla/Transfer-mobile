import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentUserPage } from './current-user.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentUserPageRoutingModule {}
