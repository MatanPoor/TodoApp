import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/app/core/models/item.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items$!: Promise<ItemModel[]>;
  countItem$!: Promise<number>;
  isItemsEmpty : boolean = false;

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.items$ = this.dataService.getUncompltedItems()
    this.checkingItemsEmpty()

  }

  async markAsDone(item : ItemModel){
    item.isCompleted = true;
    await this.dataService.putItem(item,item.id);
    this.items$ = this.dataService.getUncompltedItems()
    this.checkingItemsEmpty()
   }

   async checkingItemsEmpty() {
    this.countItem$ = this.dataService.countrActiveItems()
    if(await this.countItem$ === 0){
      this.isItemsEmpty = true;
    }

   }

}
