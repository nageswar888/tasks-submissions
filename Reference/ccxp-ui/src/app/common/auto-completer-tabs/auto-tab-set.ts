import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AutoTab } from './auto-tab';

@Component({
  selector: 'auto-tab-set',
  templateUrl: './auto-tab-set.html'
})
export class AutoTabSet implements AfterContentInit {

  @ContentChildren(AutoTab) tabs: QueryList<AutoTab>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab)=>tab.active);

    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: AutoTab){
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
    if(tab.onTabSelected) {
      tab.onTabSelected.emit(tab);
    }
  }

}
