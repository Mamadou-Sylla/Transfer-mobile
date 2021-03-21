import {Component, OnInit, ViewChild} from '@angular/core';
import { AlertController } from '@ionic/angular';
import {IonSlides} from '@ionic/angular';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import {AuthService} from '../../../services/auth.service';
import {TransactionModel} from '../../../models/transaction.model';
import {TransactionService} from '../../../services/transaction.service';
import {CalculfraisService} from '../../../services/calculfrais.service';
import {empty} from 'rxjs';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
})
export class DepotPage implements OnInit {

  @ViewChild('IonSlides', {static: false}) slider: IonSlides;
  @ViewChild('segments') segments;
  selectTabs = 'emetteur';
  etat = true;
  submitted = false;
  DepotForm =  new FormGroup ({
    cni: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    telephone: new FormControl(''),
    montant: new FormControl(''),
    nomclient: new FormControl(''),
    prenomclient: new FormControl(''),
    cell: new FormControl(''),
  });
  data = {
    prenom: '',
    nom: '',
    telephone: 0,
    cni: '',
    montant: 0,
    type: 'Depot',
    client: {
      prenom: '',
      nom: '',
      telephone: 0,
      statut: 'Emetteur',
    }
  };
  frais = 0;
    constructor(public alertCtrl: AlertController, private formBuilder: FormBuilder,
                private route: Router, private service: TransactionService, private CalculFraisService: CalculfraisService) {
  }

  ngOnInit() {

    this.DepotForm = this.formBuilder.group({
      cni: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', Validators.required],
      montant: ['', Validators.required],
      nomclient: ['', Validators.required],
      prenomclient: ['', Validators.required],
      cell: ['', Validators.required],
    });
  }




  get f() { return this.DepotForm.controls; }

  async OnSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.DepotForm.invalid) {
      return;
    }
    this.data.cni = this.DepotForm.value.cni;
    this.data.prenom = this.DepotForm.value.prenom;
    this.data.nom = this.DepotForm.value.nom;
    this.data.telephone = this.DepotForm.value.telephone;
    this.data.montant = this.DepotForm.value.montant;
    this.data.client.prenom = this.DepotForm.value.prenomclient;
    this.data.client.nom = this.DepotForm.value.nomclient;
    this.data.client.telephone = this.DepotForm.value.cell;
    const confirm = await this.alertCtrl.create({
      cssClass: 'alertCtrl',
      message: `
                      <div class="my-alert-wrapper">
                        <div class='title'>
                            <h1>Confirmation</h1>
                        </div>
                        <div class="my-custom-alert">
                            <div class='item-first'>
                              <p>Emetteur</p>
                              <h5>${this.data.nom} ${this.data.prenom} </h5>
                            </div>
                            <div  class='item'>
                              <p>Téléphone</p>
                              <h5>${this.data.telephone}</h5>
                            </div>
                            <div  class='item'>
                              <p>N°CNI</p>
                              <h5>${this.data.cni}</h5>
                            </div  class='item'>
                            <div class='item'>
                              <p>Montant à envoyer</p>
                              <h5>${this.data.montant}</h5>
                            </div>
                            <div  class='item'>
                              <p>Récepteur</p>
                              <h5>${this.data.client.nom} ${this.data.client.prenom}</h5>
                            </div>
                            <div  class='item'>
                              <p>Téléphone</p>
                              <h5>${this.data.client.telephone}</h5>
                            </div>
                        </div>
                      </div>
                    `,
      buttons: [
        {
          text: 'Annuler',
          cssClass: 'cancelled',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Confirmer',
          cssClass: 'btnOkey',
          handler: () => {
            console.log('Confirm Okay.');
            // this.service.poster(this.data).subscribe(
            //   (res: any) => console.log(res)
            // );
            this.SecondAlert();
          },
        }
      ]
    });
    await confirm.present();
  }

  async SecondAlert(){
    const confirm = await this.alertCtrl.create({
      cssClass: 'alertCtrl',
      message: `
                      <div class="my-alert-wrapper">
                        <div class='title'>
                            <h1>Transfert réussi</h1>
                        </div>
                        <div class="my-custom-alert">
                            <div class='item-first'>
                              <p>INFO</p>
                              <h5>Vous avez envoyé ${this.data.montant} à  ${this.data.client.prenom} ${this.data.client.nom} le 2020-02-23</h5>
                            </div>
                            <div  class='item'>
                              <p>Code de transaction</p>
                              <h5>${this.data.telephone}</h5>
                            </div>
                        </div>
                      </div>
                    `,
      buttons: [
        {
          text: 'Annuler',
          cssClass: 'cancelled',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Confirmer',
          cssClass: 'btnOkey',
          handler: () => {
            console.log('Confirm Okay.');
            this.SecondAlert();
          },
        }
      ]
    });
    await confirm.present();
    }

  getFeez(event: any){
    if (Number(event.target.value) !== 0)
    {
      const value = event.target.value;
      this.frais = this.CalculFraisService.getFrais(value);
      console.log(value);
      console.log(this.frais);
    }
    else {
      this.frais = 0;
    }
  }
}
