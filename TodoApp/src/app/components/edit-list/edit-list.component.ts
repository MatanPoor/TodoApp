import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ListModel } from 'src/app/core/models/list.model';
import { wordsValidator } from 'src/app/core/validations/general-validators';


@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  form!: FormGroup;
  color: string='';
  // colors: string[] = ['red','green','blue','brown','magenta','navy','black',]

  constructor() { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.form = new FormGroup({
        caption: new FormControl('', [Validators.required]), 
        description: new FormControl('', [Validators.required, wordsValidator(10,10)]), 
        color: new FormControl('',[Validators.required]),
        icon: new FormControl('',[Validators.required])
    });

    

    if(true)
    {
      this.retreiveData()
    }

  } 

    retreiveData() {
        let initialList: ListModel = {
          caption: 'Things to Buy', 
          description: 'A friend from another world', 
          color: 'red',
          icon: 'something'
      }

          this.form.reset(initialList);
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
