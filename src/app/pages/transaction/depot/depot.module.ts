import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { DepotPageRoutingModule } from './depot-routing.module';

import { DepotPage } from './depot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepotPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [DepotPage]
})
export class DepotPageModule {}
