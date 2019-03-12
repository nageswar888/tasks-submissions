import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

import {forEach} from "@angular/router/src/utils/collection";
import * as _ from "lodash";
import {MatTableDataSource} from "@angular/material";
import { SearchHealthCareProviderService } from "../home/home.service";

import {LocalStorage} from "@ngx-pwa/local-storage";

import { CommonUtils, HOSPITALDATA, HOSPITAL_LABELS, RATINGS_MEASUREMENTS, CAPABILITIES_CRED,
  PHYSICIAN_PROVIDER_LABELS, GENERAL_INFO } from "../common/CommonUtils";
import {RatingFilterPipe, staffRatingPipe} from "../common/pipes/commonPipes";
import {DataService} from "../common/DataService";

@Component({
  selector: 'app-compare-selected-provider',
  templateUrl: './compare-providers.component.html',
  styleUrls: ['./compare-providers.component.sass'],
  providers: [ RatingFilterPipe, staffRatingPipe ]
})

export class CompareProvidersComponent implements OnInit{
  public selectedProviderIds: any[];
  public comparedProviders = [];
  public selectedProviders: any[] = [];
  private typeOfProvider;
  private staticProviderType = 'Physicians'; //TODO by updating the type of provider
  public textLimit = 6;
  public providerDetailLabels = [];
  public physicianLables = PHYSICIAN_PROVIDER_LABELS;
  public hospitalLabels = HOSPITAL_LABELS;
  public generalInfoLabels = GENERAL_INFO;
  public ratingLabels = RATINGS_MEASUREMENTS;
  public capabilityLabels = CAPABILITIES_CRED;
  public isChecked = true;
  public isMapExpand:boolean;
  public markerAddresses = [];
  public hospitalsData=HOSPITALDATA; //TODO if Back End is updated with Hospitals results
  private geo: any;
  constructor( private route: ActivatedRoute, private localStorage:LocalStorage,
               private compareProviderService: SearchHealthCareProviderService, private router: Router,
               private commonUtils:CommonUtils, private dataService: DataService){

  }
  ngOnInit() {
    this.localStorage.getItem('selectedProviderWithGeo').subscribe((object)=>{
      if(object.providers){
        this.selectedProviders = object.providers;
        this.selectedProviderIds = object.providers.map(o => o.ind_pac_id).join(',');
        this.geo = object.geo;
        this.loadProvidersToCompare({physicianId: this.selectedProviderIds, geo: object.geo})
      } else{
        console.log("No Provider Selected");
      }
    });
  }

  loadProvidersToCompare = (params) => {
    this.compareProviderService.selectedProviders(params).subscribe((response)=>{
      if(response.data.items){
        this.populateProviders(response.data.items);
      } else{
        console.log("No data Found")
      }
    }, error => {
      console.log("Error from server ",error)
    })
  };

  populateProviders = ( results ) => {
    if(this.staticProviderType=='Physicians'){
      this.typeOfProvider='Physician';
      this.providerDetailLabels=this.physicianLables;
      this.comparedProviders = CommonUtils.preparePhysiciansData(results);
    } else {
      this.typeOfProvider='Hospital';
      this.providerDetailLabels=this.hospitalLabels;
      this.comparedProviders = CommonUtils.prepareHospitalsData(this.hospitalsData);
    }
  };

  generalInfoActive(){
    this.isChecked=false;
  }
  providerActive(){
    this.isChecked=true;
  }

  /**
   * Remove provider from the comparison
   * @param id
   */
  remove(id){
    let cardIndex = _.findIndex(this.comparedProviders, function(o) {
      return o.ind_pac_id == id;
    });
    if(cardIndex>=0){
      this.comparedProviders.splice(cardIndex,1);
      this.localStorage.setItem('selectedProviderWithGeo',{providers: this.comparedProviders, geo: this.geo}).subscribe(()=>{});

    }
  }

  providerSelected(id){
    this.router.navigate(['provider/' + id+'/'+this.typeOfProvider]);
  }
}
