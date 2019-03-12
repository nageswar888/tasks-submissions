import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'auto-tab',
  templateUrl: "./auto-tab.html"
})
export class AutoTab {
  @Input('tabTitle') title: string;
  @Input('id') id: string;
  @Input('disabled') disabled: any;
  @Input() active = false;
  @Output() onTabSelected = new EventEmitter<any>();
}
