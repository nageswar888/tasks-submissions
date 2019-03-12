import {Component, EventEmitter, Input, Output, ViewChild, OnInit} from "@angular/core";
import {LocalStorage} from "@ngx-pwa/local-storage";
import * as _ from "lodash";
import {Router} from "@angular/router";

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})

export  class CardComponent implements OnInit{
  public cards:any=[];
  public rate=2.5;
  public cardsData=[];
  public isViewMoreList=false;

  @Input() page: any;
  @Input() disableSelection: boolean;
  @Output() providersToCompare = new EventEmitter();
  @Input() limit: any;
  /**
   * Setting the search results to cards
   * @param {any[]} _data
   */
  @Input() set data(_data: any[]) {
    this.cards=_data;
    this.cards.forEach((card)=>{
      card['isViewMoreList']=false;
    })
  }
  constructor(private localStorage:LocalStorage, private router: Router){

  }
  ngOnInit() {
    this.localStorage.removeItem('selectedProvider').subscribe(() => {});
  }

  /**
   * To check whether card is selected or not
   * @param event
   * @param id
   */
  onCardSelected( event, id ){
    if(!event.marked){
      event.marked=1;
    } else{
      event.marked=0;
    }
    this.providersToCompare.emit(event);
  }
  //TODO
  viewProvider(id){
    this.router.navigate(['provider/' + id+'/'+'physician']);
  };
}
