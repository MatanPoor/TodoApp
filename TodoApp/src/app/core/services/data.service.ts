import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemModel } from '../models/item.model';
import { ListModel } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly _url : string = "http://localhost:3000"

  constructor(private httpClient:HttpClient) { }

  getItems(): Promise<ItemModel[]>{
    let url = `${this._url}/items`
    return this.httpClient.get<ItemModel[]>(url).toPromise();
  }
  getLists(): Promise<ListModel[]>{
    let url = `${this._url}/lists`
    return this.httpClient.get<ListModel[]>(url).toPromise();
  }
}
