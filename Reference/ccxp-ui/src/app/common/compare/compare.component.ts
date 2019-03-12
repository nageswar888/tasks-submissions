import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {validateStyleProperty} from "@angular/animations/browser/src/render/shared";
import * as _ from "lodash";
import {Router} from "@angular/router";
import {LocalStorage} from "@ngx-pwa/local-storage";
@Component({
  selector: 'compare-component',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.sass']
})

export class CompareComponent implements OnInit{

  public selectedCards=[];
  public textLimit=15;
  public selectedProviderIds=[];

  @Output() removeSelectedCard =new EventEmitter();
  @Output() clearAllData = new EventEmitter();
  @Input() compareProviderType;

  constructor(private router: Router,private localStorage:LocalStorage) { }

  ngOnInit() {

  }

  @Input()set selectCards(_data:any[]) {
    if(_data){
      this.selectedCards=_data;
    }
  }

  /**
   * Clear all selected data
   */
  clearAll(){
    this.selectedCards=[];
    this.clearAllData.emit()
  }

  /**
   * Remove data from particular selected section
   * @param id
   */
  removeSelectedProvider(id){
    let cardIndex = _.findIndex(this.selectedCards, function(o) {
      return o.ind_pac_id == id;
    });
    if(cardIndex>=0){
      this.selectedCards.splice(cardIndex,1);
    }
    this.removeSelectedCard.emit(id);
  }

  compareSelectedProviders(){
    if(this.selectedCards.length > 1) {
      this.localStorage.removeItem('selectedProvider').subscribe(() => {});
      this.localStorage.setItem('selectedProvider',this.selectedCards).subscribe(()=>{
        this.router.navigate(['/compare-providers']);
      });
    } else {
      console.log("No Providers Selected");
    }

    /*let compareProviders = [];
    this.selectedCards.forEach((item) => {
      compareProviders.push(item.ind_pac_id);
    });
    if(compareProviders.length > 1) {
      this.router.navigate(['compareProviders' ,{compareProviders:compareProviders} ]);
    }*/
  }


}
