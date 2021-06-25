import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ItemModel } from 'src/app/core/models/item.model';
import { ListModel } from 'src/app/core/models/list.model';
import { DataService } from 'src/app/core/services/data.service';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
  lists$!:Promise<ListModel[]>;
  items$!:Promise<ItemModel[]>;
  initialItem: ItemModel[] = [{"id" : 0,"caption":''  ,"listId" : 0  ,"isCompleted" : false }]
  initialList: ListModel = {"id" : 0,"caption":''  ,"description" : ''  ,"color" : '', "icon" : '' }

  constructor(private dataService:DataService , private activatedRouter:ActivatedRoute , private router:Router) { }

   async ngOnInit(): Promise<void> {
    let listId = Number(this.activatedRouter.snapshot.params['listId']);
    let listId$ = this.activatedRouter.params.pipe(map(prms => Number(prms['listId'])));
    if(listId !== -1){
      this.initialItem = await this.dataService.getItemsById(listId);
      console.log(this.initialItem);
      this.initialList = await this.dataService.getListById(listId);
      
    }
    this.dataService.getItemsById(listId)
  }

  addItem(value : string){
    // this.items$.(value)
  }
  

}
