import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {TransactionService} from '../../../services/transaction.service';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.page.html',
  styleUrls: ['./list-transactions.page.scss'],
})
export class ListTransactionsPage implements OnInit {

  constructor(private service: TransactionService) { }
  totalLength: number | any;
  page = 1;
  data: any;
  somme = new Array();
   sum = 0;
ngOnInit() {
    this.service.getByUser().subscribe(
      res => {
        this.data = res;
        for (let i = 0; i < this.data.length; i++ )
        {
          if (this.data[i].type !== 'Cancelled')
          {
            if (!isNaN(Number(this.data[i].montant)))
            {
              this.somme.push(Number(this.data[i].montant));
            }
          }
        }
        for (let k = 0; k < this.somme.length; k++)
        {
          // tslint:disable-next-line:radix
          this.sum += parseInt((this.somme[k]));
        }
        //console.log(this.sum);
      });
  }


}

