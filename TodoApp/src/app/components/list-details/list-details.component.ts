import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  captionWord = '';
  lists$!: Promise<ListModel[]>;
  items$!: Promise<ItemModel[]>;
  currentListItems: string[] = [];
  currentList: ListModel = { "id": 0, "caption": '', "description": '', "color": '', "icon": '' };
  isShowing:boolean = false;
  listId = Number(this.activatedRouter.snapshot.params['id']);
 

  constructor(private dataService: DataService, private activatedRouter: ActivatedRoute, private router: Router) { }


  async ngOnInit(): Promise<void> {
    this.activatedRouter.paramMap.subscribe((params) => {
      const listId = params.get('id')!
      if (listId) {
        this.dataService.getListById(Number(listId)).then((data) => {
          this.currentList = data;
          // console.log(this.currentList)
        })
      }
    })

    let listId = Number(this.activatedRouter.snapshot.params['id']);

    this.items$ = this.dataService.getItemsById(listId);
    this.items$.then(data => data.forEach(element => {
      if (element.listId === this.listId) {
        this.currentListItems.push(element.caption)
      }
    }))

    // let listId$ = this.activatedRouter.params.pipe(map(prms => Number(prms['listId'])));
    // console.log("listId$" + listId$);
    // console.log("if (listId !== -1)" + listId);
    // if(listId !== -1  ){
    //   this.initialItem = await this.dataService.getItems();
    // console.log(this.initialItem);
    // this.initialList = await this.dataService.getListById(listId);

  }

  async deleteList(listmodel: ListModel) {
    let listId = Number(this.activatedRouter.snapshot.params['id']);
    await this.dataService.deleteList(listmodel , listId);
    this.router.navigate(["lists"]);
  }

  confimrdDelete(): void {
    this.isShowing = true;
  }
  cancelDelete(): void {
    
    this.isShowing = false;
  }

  async addItem(value : string){
    let newitem :ItemModel={
      id: 0,
      caption : value,
      listId : this.listId,
      isCompleted : false
    }
    await this.dataService.postItem(newitem);
    let listId = Number(this.activatedRouter.snapshot.params['id']);
    this.items$ = this.dataService.getItemsById(listId);
  }
 

 async markAsDone(item : ItemModel){
   item.isCompleted = true;
   await this.dataService.putItem(item,item.id);
   this.items$ = this.dataService.getItems()
  }

  // this.dataService.getItemsById(listId)
}


 


