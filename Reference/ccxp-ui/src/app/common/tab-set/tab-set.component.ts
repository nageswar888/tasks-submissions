import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {DataService} from "../DataService";
import * as _ from "lodash";
@Component({
  selector: 'app-tab-set',
  templateUrl: "./tab-set.component.html"
})
export class TabSetComponent implements OnInit{
  public selectedTabs=[];
  private allProviders;
  private all={icon: "mdi-sort-variant", label: "All", id: "all", selected: true,active:true};
  private textLimit=6;
  @Input() count;
  @Input() active = false;
  @Output() onTabSelected = new EventEmitter<any>();
  @Input() set tabs(_data: any[]) {
    this.selectedTabs=[];
    _data.forEach((value)=>{
        this.selectedTabs.push(value);
    })
  }
  constructor(private dataService: DataService){

  }
  ngOnInit() {
   /* this.dataService.searchObjectObservable.subscribe( searchObject => {
      let providers = searchObject[0].values;
      this.selectedTabs=[];
      this.selectedTabs.push(this.all);
      providers.forEach((value)=>{
        let provider = _.find(this.allProviders, { label:value });
        provider['selected']=true;
        this.selectedTabs.push(provider);
      })
    });*/
  }
  selectTab(tab){
    this.selectedTabs.forEach(tab => tab.active = false);
    tab.active = true;
    if(tab.active){
      this.onTabSelected.emit(tab);
    }
  }

}
