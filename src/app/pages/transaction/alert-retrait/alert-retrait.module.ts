import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertRetraitPageRoutingModule } from './alert-retrait-routing.module';

import { AlertRetraitPage } from './alert-retrait.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertRetraitPageRoutingModule
  ],
  declarations: [AlertRetraitPage]
})
export class AlertRetraitPageModule {}
