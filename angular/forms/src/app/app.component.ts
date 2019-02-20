import { Component } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first;
  father;
  emal;
  pwd;
  dat;
  precentadd;
  mob;
  gend;

constructor(private localStorage: LocalStorage){}
  ngOninit() {
  this.localStorage.getItem('user').subscribe((user) => {
      console.log(user);
    this.first=user.firstName;
    this.father=user.fatherName;
    this. emal=user.email;
    this.pwd=user.password;
    this.precentadd=user.padd;
    this.gend=user.gender;
    this. mob=user.mobile;
    this.dat=user.dob;
    });
  }

}
