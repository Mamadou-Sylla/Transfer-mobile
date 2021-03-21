import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../../../services/transaction.service';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.page.html',
  styleUrls: ['./all-transactions.page.scss'],
})
export class AllTransactionsPage implements OnInit {

  constructor(private service: TransactionService) { }
  totalLength: number | any;
  page = 1;
  somme = new Array();
  sum = 0;
  data: any;
  ngOnInit() {
    this.service.getAll().subscribe(
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
      });
  }

}
