import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonSlides} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TransactionService} from '../../../services/transaction.service';
import {CalculfraisService} from '../../../services/calculfrais.service';

@Component({
  selector: 'app-calculateur',
  templateUrl: './calculateur.page.html',
  styleUrls: ['./calculateur.page.scss'],
})
export class CalculateurPage implements OnInit {

  freez: any;
  submitted = false;
  Calcul =  new FormGroup ({
    frais: new FormControl(''),
  });
  data = {
  frais: 0
  };
  constructor(public alertCtrl: AlertController, private formBuilder: FormBuilder,
              private route: Router, private service: CalculfraisService) {
  }

  ngOnInit() {

    this.Calcul = this.formBuilder.group({
      montant: ['', Validators.required],
    });
  }

  get f() { return this.Calcul.controls; }

  async OnSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.Calcul.invalid) {
      return;
    }
    this.data.frais = this.Calcul.value.montant;
    this.freez = this.service.getFrais(this.data.frais);

    const alert = await this.alertCtrl.create({
      cssClass: 'alertCtrl',
      message: `<div class="my-alert-wrapper">
                        <div class='title'>
                            <h1>Confirmation</h1>
                        </div>
                        Pour une transaction de ${this.data.frais}, le frais est égal à:
                        <span>${this.freez}</span>
                        </div>
                </div>`,
      buttons: [{
        text: 'Retour',
        role: 'cancel',
        cssClass: 'btnFrais',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }],

    });
    await alert.present();
  }



}
