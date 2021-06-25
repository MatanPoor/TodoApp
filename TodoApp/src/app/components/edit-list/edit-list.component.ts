import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
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
  colors: string[] = ['red','green','blue','brown','magenta','navy','black']
  currentColor: string = 'red';
  initialList: ListModel = {"id" : 0,"caption":''  ,"description" : ''  ,"color" : '', "icon" : '' }


  constructor(private dataService : DataService , private activatedRouter:ActivatedRoute , private router:Router) { }

    async ngOnInit(): Promise<void> {
    let id = Number(this.activatedRouter.snapshot.params['id']);
    let id$ = this.activatedRouter.params.pipe(map(prms => Number(prms['id'])));
    if(id !== -1){
      this.initialList = await this.dataService.getListById(id)
    }
    this.buildForm()
  }

  buildForm() {
    this.form = new FormGroup({
        caption: new FormControl('', [Validators.required]), 
        description: new FormControl('', [Validators.required, wordsValidator(5,20)]), 
        color: new FormControl('',[Validators.required]),
        icon: new FormControl('',[Validators.required])
    });
    this.form.reset(this.initialList);
  } 

    changeColor(color: string) {
      this.currentColor = color;
    }

    onGo() {
      let originalList: ListModel  = {
          id: 12, 
          caption: 'bla', 
          description: 'bla bla bla', 
          color: '',
          icon: ''
      }

      originalList = {
          ...originalList, 
          ...this.form.value
      }
    
      console.log(this.form.value);
    }

    get(fieldName: string){
    return this.form.get(fieldName)
    }

}
