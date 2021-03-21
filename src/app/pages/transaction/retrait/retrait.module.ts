import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetraitPageRoutingModule } from './retrait-routing.module';

import { RetraitPage } from './retrait.page';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetraitPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [RetraitPage]
})
export class RetraitPageModule {}
