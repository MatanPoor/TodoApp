import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemModel } from '../models/item.model';
import { ListModel } from '../models/list.model';
import { map } from 'rxjs/operators';


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
  getItemsById(listId : number) : Promise<ItemModel[]>{
    let url = `${this._url}/items/${listId}`;
    return this.httpClient.get<ItemModel[]>(url).toPromise();
  }

  getLists(): Promise<ListModel[]>{
    let url = `${this._url}/lists`;
    return this.httpClient.get<ListModel[]>(url).toPromise();
  }
  getListById(id : number) : Promise<ListModel>{
    let url = `${this._url}/lists/${id}`;
    return this.httpClient.get<ListModel>(url).toPromise();
  }
 
  countrLists(): Promise<number>{
    let url = `${this._url}/lists`;
    return this.httpClient.get<ListModel[]>(url).pipe(map(l => l.length)).toPromise();
  }
  countrTodoItems(): Promise<number>{
    let url = `${this._url}/items`;
    return this.httpClient.get<ItemModel[]>(url).pipe(map(items => items.length)).toPromise();
  }
  countrActiveItems(): Promise<number>{
    let url = `${this._url}/items`;
    return this.httpClient.get<ItemModel[]>(url).pipe(map(items => items.filter(item => !item.isCompleted)),map(l => l.length)).toPromise();
  }

 
}
