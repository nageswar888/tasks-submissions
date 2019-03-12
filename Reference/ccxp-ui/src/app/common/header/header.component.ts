import { Component, OnInit } from '@angular/core';
import { DataService } from "../DataService";
import { SPECIALITES } from "../CommonUtils";
import * as _ from "lodash";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
