
import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";

@Component({
  selector: 'view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.sass']
})

export class ViewMoreComponent implements OnInit{

  public list=[];
  public defaultLimit: number = 2;
  public initialLimit: number;
  @Input() set viewList(data: any[]){
   this.prepareData(data);
  }
  @Input() isLink: boolean = true;
  @Input() set initLimit(initialLimit: number){
    this.initialLimit = initialLimit;
    this.defaultLimit = initialLimit;
  }

  constructor(){
  }

  ngOnInit() {
  }

  prepareData = (dataList: any[]) => {
    this.list=[];
    if(dataList) {
      dataList.forEach((data)=>{
        if(data) {
          let record={};
          if( typeof data === 'string' ) {
            record['name']=data;
          }else if( data.provider_id ) {
            record['name'] = data.hospital_name;
          }
          this.list.push(record);
        }
      });
    }
  };

  viewLessList = () => {
    this.defaultLimit = this.initialLimit;
  };

  viewMoreList = () => {
    this.defaultLimit = this.list.length;
  };
}

