import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertDepotPageRoutingModule } from './alert-depot-routing.module';

import { AlertDepotPage } from './alert-depot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertDepotPageRoutingModule
  ],
  declarations: [AlertDepotPage]
})
export class AlertDepotPageModule {}
