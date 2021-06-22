import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors-preseneter',
  templateUrl: './errors-preseneter.component.html',
  styleUrls: ['./errors-preseneter.component.css']
})
export class ErrorsPreseneterComponent implements OnInit {

  @Input() 
  errors: any;
  constructor() { }

  ngOnInit(): void {
  }

}
