import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonSlides, PopoverController} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TransactionService} from '../../../services/transaction.service';
import {TransactionModel} from '../../../models/transaction.model';
import {AlertRetraitPage} from '../alert-retrait/alert-retrait.page';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {

  constructor(public alertCtrl: AlertController, private formBuilder: FormBuilder,
              private route: Router, private service: TransactionService,
              private popOver: PopoverController) { }
  @ViewChild('IonSlides', {static: false}) slider: IonSlides;
  @ViewChild('segments') segments;
  selectTabs = 'emetteur';
  etat = true;
  submitted = false;
  RetraitForm =  new FormGroup ({
    code: new FormControl(''),
    cni: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    montant: new FormControl(''),
    cell: new FormControl(''),
  });
  data = {
    codeTransfert: '',
    montant: '',
    type: 'Retrait',
    client: {
      prenom: '',
      cni: '',
      nom: '',
      telephone: '',
      statut: 'Beneficiaire',
    }
  };
  Transfert: TransactionModel[] = [];
  emetteur: any;
   ok: any;
  ngOnInit() {
    this.RetraitForm = this.formBuilder.group({
      code: ['', Validators.required],
      cni: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      montant: ['', Validators.required],
      cell: ['', Validators.required],

    });
  }

  get f() { return this.RetraitForm.controls; }
  isValid(event): boolean{
    return this.RetraitForm.controls[event].valid;
    console.log(this.RetraitForm.value.code);
}

  values: string;

getCode(event: any){
  this.values = event.target.value;
  console.log(this.values);
this.service.getByCode(this.values).subscribe(
    (res: any) => {
      this.Transfert = res;
      this.emetteur = this.Transfert[0];
      console.log(this.emetteur);
    });
}
  OnSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.RetraitForm.invalid) {
      return;
    }
    this.data.codeTransfert = this.RetraitForm.value.code;
    this.data.montant = this.RetraitForm.value.montant;
    this.data.client.prenom = this.RetraitForm.value.prenom;
    this.data.client.nom = this.RetraitForm.value.nom;
    this.data.client.cni = this.RetraitForm.value.cni;
    this.data.client.telephone = this.RetraitForm.value.cell;
    this.ok = this.data.codeTransfert;
    this.service.poster(this.data).subscribe(
      (res: any) => console.log(res)
    );
  }

  async OnConfirm(donnees: TransactionModel)
  {
    console.log(donnees);
    const popover = await this.popOver.create({
      component: AlertRetraitPage,
      componentProps: {},
      translucent: true
    });
    return await popover.present();
  }
}
