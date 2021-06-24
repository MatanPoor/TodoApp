import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  items: string[] = ['milk','bread','fish','beef','chitus'];
  
  constructor() { }

  ngOnInit(): void {
    this.items.forEach(element => {
      console.log(element);
    });
  }

  addItem(value : string){
    this.items.push(value)
  }

}
