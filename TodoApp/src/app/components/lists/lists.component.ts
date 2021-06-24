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
  buttonList: ListModel[]=[
      {
        "id": 1,
        "caption": "ma sheba 1",
        "description" : "stam mashu lirot",
        "color" : "red",
        "icon" : "home"
      },
      {
        "id": 2,
        "caption": "ma sheba 2",
        "description" : "stam mashu lirot",
        "color" : "red",
        "icon" : "home"
      },
      {
        "id": 3,
        "caption": "ma sheba 3",
        "description" : "stam mashu lirot",
        "color" : "red",
        "icon" : "home"
      },  
    ];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.lists$ = this.dataService.getLists();
  }

}
