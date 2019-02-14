import { Component } from '@angular/core';
import {v} from '@angular/core/src/render3';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  name = 'Nageswar';
  name1 = ' nageswar[from parent to child]';
  fruits: string[] = ['apple', 'banana', 'mango', 'orange', 'greaps'];
  fruit: string;
  array: string[];
  data = {'name': ['nageswar', 'rajkumar', 'jagadeesh'], 'id': ['001', '002', '003'], 'phone': ['9951506361', '7659818811', '9848674659']};
  value(fruit: string) {
    document.getElementById('id1').innerHTML = fruit;
  }

  send = (index: number) => {
    this.array = [this.data.name[index], this.data.id[index], this.data.phone[index]];
  }

  constructor() {
  }

  passValue = (val) => {
    this.title = val;
  }

}


