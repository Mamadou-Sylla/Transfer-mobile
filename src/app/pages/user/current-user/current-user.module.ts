import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentUserPageRoutingModule } from './current-user-routing.module';

import { CurrentUserPage } from './current-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentUserPageRoutingModule
  ],
  declarations: [CurrentUserPage]
})
export class CurrentUserPageModule {}
