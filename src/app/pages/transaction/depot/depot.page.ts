import {Component, OnInit, ViewChild} from '@angular/core';
import {NavController} from '@ionic/angular';
import {IonSlides} from '@ionic/angular';


@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
})
export class DepotPage implements OnInit {

  @ViewChild('IonSlides', { static: false }) slider: IonSlides;
  @ViewChild('segments') segments;
  selectTabs = 'emetteur';
  etat = true;

  constructor(public navCtrl: NavController) {
  }
  ngOnInit() {
  }

  OnSubmit()
  {
    if (this.etat){
      this.selectTabs = 'beneficiaire';
      this.etat = false;
    }
    else
    {
      alert('ok');
    }

  }
}
