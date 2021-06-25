import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements OnInit {
  listsCounter$! : Promise<number>;
  itemsCounter$! : Promise<number>;
  activeItemsCounter$! : Promise<number>;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.listsCounter$= this.dataService.countrLists();
    this.itemsCounter$= this.dataService.countrTodoItems();
    this.activeItemsCounter$= this.dataService.countrActiveItems();
  }

}
