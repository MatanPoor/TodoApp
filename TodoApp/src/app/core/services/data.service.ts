import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemModel } from '../models/item.model';
import { ListModel } from '../models/list.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly _url : string = "http://localhost:5000"

  constructor(private httpClient:HttpClient) { }

  getUncompltedItems(): Promise<ItemModel[]>{
    let url = `${this._url}/items`
    return this.httpClient.get<ItemModel[]>(url).pipe(map(items => items.filter(i => !i.isCompleted) )).toPromise();
  }

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
  postItem(item:ItemModel): Promise<ItemModel>{
    let url = `${this._url}/items`;
     return this.httpClient.post<ItemModel>(url,item, {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
    }).toPromise();
  }
  putItem(item:ItemModel ,itemId:number): Promise<ItemModel>{
    let url = `${this._url}/items`;
     return this.httpClient.put<ItemModel>(url,item, {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
    }).toPromise();
  }

  putList(list:ListModel,listId:number ): Promise<ListModel>{
    let url = `${this._url}/lists`;
     return this.httpClient.put<ListModel>(url, list, {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
    }).toPromise();
  }
  
  async deleteList(listId:number){
    let urlItemsStr = `${this._url}/items/${listId}`;
    let urlItems = await this.httpClient.get<ItemModel[]>(urlItemsStr).toPromise();


    let urlLists = `${this._url}/lists/${listId}`;
    
    for await (const item of urlItems) {
      let url = `${this._url}/items/${item.id}`;
      await this.httpClient.delete<ItemModel>(url).toPromise();
    }
    return this.httpClient.delete<ListModel>(urlLists).toPromise();
  }

  postList(list:ListModel): Promise<ListModel>{
    let url = `${this._url}/lists`;
     return this.httpClient.post<ListModel>(url, list, {
      headers: new HttpHeaders({'Content-Type': 'application/json',}),
    }).toPromise();
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
