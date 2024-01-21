import { Component, OnInit } from '@angular/core';
import { studentDetails } from './datamodel';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  selectedCar!: number;

    cars = [
        { id: 1, name: 'Java' },
        { id: 2, name: 'Python' },
        { id: 3, name: 'C++' },
        { id: 4, name: 'JavaScript' },
        { id: 5, name: 'Go' },
        { id: 6, name: 'PHP' },
        { id: 7, name: 'Angular' },
        { id: 8, name: 'Django' },
        { id: 9, name: 'React' },
        { id: 10, name: 'Flask' },

    ];

  student :studentDetails={
    name:'',
    gender:'',
    coursetype:'',
    phoneNo:'',
    agree:false

  }

  constructor(private config: NgSelectConfig) { }

  ngOnInit(): void {
  }

}
