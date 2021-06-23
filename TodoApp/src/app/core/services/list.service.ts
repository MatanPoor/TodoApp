import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  urlPath:string  = environment.serverURL;
  constructor() { }

  // getListById(id:number){
  //   this.httpClient.get()
  // }
}
