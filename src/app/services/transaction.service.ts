import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Frais, TransactionModel} from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  transaction: TransactionModel[] = [];
  private url = 'http://127.0.0.1:8000/api/transactions';

  getAll(): Observable<TransactionModel[]>
  {
    return this.http.get<TransactionModel[]>(this.url);
  }

  get(id: string): any
  {
    return this.http.get<[]>(this.url + '/' + id);
  }

  getByCode(code: string): any
  {
    return this.http.get<[]>(this.url + '?code_transfert=' + code + '&type=Depot');
  }
  poster(Data: any): any
  {
    return this.http.post<TransactionModel[]>(this.url, Data, {responseType: 'text' as 'json'});
  }

  update(tansaction: TransactionModel, id: string): any
  {
    return this.http.put<TransactionModel[]>(this.url + '/' + id, tansaction);
  }

  delete(id: string): any
  {
    return this.http.delete<TransactionModel[]>(this.url + '/' + id);
  }
  getByUser(): any
  {
    return this.http.get<TransactionModel[]>(this.url +  '/mestransactions' );
  }

  getFrais(): Observable<Frais[]>
  {
    return this.http.get<Frais[]>('http://127.0.0.1:8000/api/frais');
  }
}



