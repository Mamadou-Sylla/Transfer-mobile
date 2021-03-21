import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../../../services/transaction.service';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.page.html',
  styleUrls: ['./commission.page.scss'],
})
export class CommissionPage implements OnInit {

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
        console.log(res);
        for (let i = 0; i < this.data.length; i++ )
        {
          if (this.data[i].type !== 'Cancelled')
          {
            if (!isNaN(Number(this.data[i].partTransfert)))
            {
              this.somme.push(Number(this.data[i].partTransfert));
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
