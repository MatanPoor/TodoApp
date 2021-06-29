import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListModel } from 'src/app/core/models/list.model';
import { DataService } from 'src/app/core/services/data.service';
import { wordsValidator } from 'src/app/core/validations/general-validators';


@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  form!: FormGroup;
  colors: string[] = ['','red','green','blue','brown','magenta','navy','black']
  icons: string [] = ['home','call','build','access_time','shopping_cart','computer']
  currentColor: string = '';
  currentIcon: string = '';
  initialList: ListModel = {"id" : 0,"caption":''  ,"description" : ''  ,"color" : '', "icon" : '' }


  constructor(private dataService : DataService , private activatedRouter:ActivatedRoute , private router:Router) { }

    async ngOnInit(): Promise<void> {
      let id = Number(this.activatedRouter.snapshot.params['id']);

      if(id !== -1){
        this.initialList = await this.dataService.getListById(id)
        this.currentColor = this.initialList.color;
      }
      this.buildForm()
    }

  buildForm() {
    this.form = new FormGroup({
        caption: new FormControl('', [Validators.required]), 
        description: new FormControl('', [Validators.required, wordsValidator(10,30)]), 
        color: new FormControl('',[Validators.required]),
        icon: new FormControl('',[Validators.required])
    });
    this.form.reset(this.initialList);
  } 

    changeColor(color: string) {
      this.currentColor = color;
    }

    changeIcon(icon: string) {
      this.currentIcon = icon;
    }
    

     async onGo() 
     {
        //add new list
        this.activatedRouter.paramMap.subscribe(async(params)=>{
        const listId  = Number(params.get('id'))!
        let tempId = 0;
        if (listId != -1){
          tempId = listId;
        }
        let newList:ListModel={
          id: tempId,
          caption : this.form.value.caption,
          description : this.form.value.description,
          color : this.form.value.color,
          icon : this.form.value.icon
        }

        //new list==> -1
        if(listId === -1)
        {
          await this.dataService.postList(newList);
        }
        // exsist list==> 1
        if(listId !== -1){
          await this.dataService.putList(newList,listId);
         
        }
        this.router.navigate(["lists"]);
      })
    }

    get(fieldName: string){
    return this.form.get(fieldName)
    }

}
