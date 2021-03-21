import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-alert-retrait',
  templateUrl: './alert-retrait.page.html',
  styleUrls: ['./alert-retrait.page.scss'],
})
export class AlertRetraitPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }
  async DismissClick() {
    await this.popoverCtrl.dismiss();
  }
}
