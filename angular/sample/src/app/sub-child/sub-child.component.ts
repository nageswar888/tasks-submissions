import { Component, OnInit } from '@angular/core';
import {Student} from '../studentDetails';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.css']
})
export class SubChildComponent implements OnInit {
  array: Student;
  title: Student;
  data: Student[] = [
    {id: 1, name: 'Nageswar', phone: '9951506361'},
    {id: 2, name: 'Jaggu', phone: '9848674659'},
    {id: 3, name: 'Raj', phone: '7659818811'}
  ];
  private i: number;

  send (st: Student) {
    this.array = st;
  }

  passValue = (val) => {
    this.title = val;
    for (this.i = 0; this.i < this.data.length; this.i++) {
      if (this.data[this.i] == val) {
        this.data.splice(this.i, 1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
