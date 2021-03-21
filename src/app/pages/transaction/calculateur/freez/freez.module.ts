import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreezPageRoutingModule } from './freez-routing.module';

import { FreezPage } from './freez.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreezPageRoutingModule
  ],
  declarations: [FreezPage]
})
export class FreezPageModule {}
