import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  list: object[]=[
    {
      
    },
    {}];
  constructor() { }

  ngOnInit(): void {
  }

}
