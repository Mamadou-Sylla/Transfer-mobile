import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculfraisService {
  private commission: number;

  constructor() { }

  getFrais(montant: number): any{
    const tabFrais = [
      [4999, 425],
      [9999, 850],
      [14999, 1270],
      [19999, 1695],
      [49999, 2500],
      [59999, 3000],
      [74999, 4000],
      [119999, 5000],
      [149999, 6000],
      [199999, 7000],
      [249999, 8000],
      [299999, 9000],
      [399999, 12000],
      [499999, 15000],
      [749999, 22000],
      [899999, 25000],
      [999999, 27000],
      [1999999, 30000]
    ];
    for (const frais of tabFrais) {
      if (frais[0] > montant){
        return this.commission = frais[1];
      }
    }
    this.commission = (montant * (2 / 100));
    return this.commission;
  }
}
