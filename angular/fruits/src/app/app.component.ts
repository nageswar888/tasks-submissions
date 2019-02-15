import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nageswar';

  fruits: string[] = ['apple', 'banana', 'mango', 'orange', 'greaps'];
  fruit: string;

  value(fruit: string) {
    document.getElementById('id1').innerHTML = fruit;
  }
}
