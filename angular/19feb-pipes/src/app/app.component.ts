import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

 details = [{id: 1, name: 'rocky dustin', gender: 'Male', date: new Date(), salary: 1000.656755, pho: '0987654321'},
          {id: 2, name: 'paul thomas', gender: 'Male', date: new Date(), salary: 40000.4545434, pho: '9876543434'},
          {id: 3, name: 'swapna das', gender: 'Female', date: new Date(), salary: 70000.54544, pho: '5678432190'}];

}
