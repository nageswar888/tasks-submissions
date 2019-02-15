import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Student} from '../studentDetails';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  value;
  details: Student;
  @Output()
  someValue = new EventEmitter();
  fromchild = 'sending from child-@output';
  constructor() { }

  ngOnInit() {
    this.details = this.value;
   // console.log(this.fruitValue );
  }

  passValue = () => {
    this.someValue.emit(this.details);
}

}
