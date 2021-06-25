import { Component, OnInit } from '@angular/core';
import { ListModel } from 'src/app/core/models/list.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists$!:Promise<ListModel[]>;
  
  
 constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.lists$ = this.dataService.getLists();
  }

}
