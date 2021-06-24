import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
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
  


  constructor(dataService : DataService) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.form = new FormGroup({
        caption: new FormControl('', [Validators.required]), 
        description: new FormControl('', [Validators.required, wordsValidator(5,20)]), 
        color: new FormControl('',[Validators.required]),
        icon: new FormControl('',[Validators.required])
    });

    if(true)
    {
      this.retreiveData()
    }
  } 

  changeColor(color: string) {
    this.currentColor = color;
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
