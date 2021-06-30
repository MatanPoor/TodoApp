import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemModel } from 'src/app/core/models/item.model';
import { ListModel } from 'src/app/core/models/list.model';
import { DataService } from 'src/app/core/services/data.service';
import { wordsValidator } from 'src/app/core/validations/general-validators';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})

export class ListDetailsComponent implements OnInit {
  formGroupItem!: FormGroup;
  lists$!: Promise<ListModel>;
  items$!: Promise<ItemModel[]>;
  currentListItems: string[] = [];
  currentList: ListModel = { "id": 0, "caption": '', "description": '', "color": '', "icon": '' };
  initialItem: string = "";
  isShowing:boolean = false;
  listId = Number(this.activatedRouter.snapshot.params['id']);

  constructor(private dataService: DataService, private activatedRouter: ActivatedRoute, private router: Router,private formBuilder: FormBuilder) { }

  async ngOnInit(): Promise<void> {
    this.activatedRouter.paramMap.subscribe((params) => {
      const listId = params.get('id')!
      if (listId) {
          this.dataService.getListById(Number(listId)).then((data) => {
          this.currentList =  data;
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
    this.buildForm();
    this.formGroupItem.reset();

  }
  buildForm() {
    this.formGroupItem = new FormGroup({
      caption: new FormControl('', [Validators.required, wordsValidator(3, 10)])
    });
  } 

  async deleteList(listmodel: ListModel) {
    let listId = Number(this.activatedRouter.snapshot.params['id']);
    await this.dataService.deleteList(listId);
    this.router.navigate(["home"]);
  }

  confimrdDelete(): void {
    this.isShowing = true;
  }
  cancelDelete(): void {
    
    this.isShowing = false;
  }

  async addItem(){
    let newitem :ItemModel={
      id: 0,
      caption : this.formGroupItem.value.caption,
      listId : this.listId,
      isCompleted : false
    }
    this.formGroupItem.reset();
    await this.dataService.postItem(newitem);
    let listId = Number(this.activatedRouter.snapshot.params['id']);
    this.items$ = this.dataService.getItemsById(listId);
  }
 

  async markAsDone(item : ItemModel){
   item.isCompleted = true;
   await this.dataService.putItem(item,item.id);
   this.items$ = this.dataService.getItemsById(item.listId);
  }

  get(fieldName: string){
    return this.formGroupItem.get(fieldName)
  }

}


 


