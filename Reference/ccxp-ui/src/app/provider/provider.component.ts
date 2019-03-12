import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import { LocalStorage } from "@ngx-pwa/local-storage";

import {SearchHealthCareProviderService} from "../home/home.service";
import {DataService} from "../common/DataService";
import {
  CommonUtils, HOSPITALDATA, HOSPITAL_LABELS,
  PHYSICIAN_PROVIDER_LABELS, GENERAL_INFO
} from "../common/CommonUtils";

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.sass']
})

export class ProviderComponent implements OnInit {
  public provider;
  public markerAddresses = [];
  public generalLabels = [];
  public providerLabels = PHYSICIAN_PROVIDER_LABELS;
  public generalInfoLabels = GENERAL_INFO;
  public hospitalLabels = HOSPITAL_LABELS;
  public providerDetailResults = [];
  public generalInfoResults = [];
  public providerDetailLabels=[];
  public physicianObject;
  public percentage=90;
  public hospitalsData=[{
    "provider_id": "351305",
    "hospital_name": "KENMARE COMMUNITY HOSPITAL",
    "address": "PO BOX 697",
    "city": "KENMARE",
    "state": "ND",
    "zip_code": "58746",
    "county_name": "WARD",
    "phone_number": "7013854296",
    "hospital_type": "Critical Access Hospitals",
    "hospital_ownership": "Voluntary non-profit - Private",
    "emergency_services": true,
    "hospital_overall_rating": 3,
    "hospitals_rdmsn": []
  }];//TODO if back end is updated with Hospital Results
  public typeOfProvider;
  public type;
  public providerObject:any;

  constructor(public router: Router, private route: ActivatedRoute, private providerService: SearchHealthCareProviderService,
              private commonUtils:CommonUtils, private dataService: DataService, private localStorage:LocalStorage) {

  }

  ngOnInit() {
    this.providerObject = {name:'',type:'',providerLabel:'',tabs:[{label:'PROVIDER DETAILS',results:[],active:true},{label:'LOCATIONS',results:[],active:false},{label:'QUALITY RATING DETAILS',results:[],active:false}]};
    this.route.params.subscribe(params => {
      this.type='physician';
      this.providerObject.type = this.type;
      if( this.type == 'physician' && params.id ){
        this.typeOfProvider = 'physician'
        // this.generalLabels = this.physicianLabels;
        let geo: any;
        this.localStorage.getItem('searchObject').subscribe((searchObject)=> {
          geo = this.commonUtils.findObject(searchObject,'prop','location').geo;
          let queryParams = {physicianId:params.id};
          if(geo) {
            queryParams['geo'] = geo;
          }
          this.providerService.selectedProviders(queryParams).subscribe((response) => {
            if(response.data) {
              this.prepareProviderDetails(response.data.items);
            }
          }, error => {
            console.log("Error from server ", error)
          })
        });

      } else {
        this.typeOfProvider = 'hospital';
        this.generalLabels = this.hospitalLabels

        this.provider = CommonUtils.prepareHospitalsData(this.hospitalsData);
        this.populateAddresses(this.provider);
      }
    })
  }

  populateAddresses = (providers: any): void => {
    this.markerAddresses = [];
    providers.filter(provider => {
      this.markerAddresses.push({address: provider.adr_ln_1+","+provider.cty, serialNo:1});
    });
    if(this.dataService.searchLocation) {
      this.markerAddresses.push({'coordinates':{lng: this.dataService.searchLocation.lat,
        lat: this.dataService.searchLocation.lng}, 'label': 'Your Location'});
    }
  };

  navigateBack(){
    this.router.navigate(['/compare-providers']);
  }
  prepareProviderDetails = ( results ) => {
    let preparedObjects = CommonUtils.preparePhysiciansData(results);
    if(preparedObjects.length > 0) {
      this.physicianObject = preparedObjects[0];
    }
    if(this.providerObject.type == 'physician'){
      this.providerDetailLabels=this.providerLabels;
      this.providerObject.name=CommonUtils.getFullName(results[0]);
      this.providerObject.providerLabel=this.getSpecialityName(results[0])
      this.providerObject.tabs[0].results=CommonUtils.preparePhysiciansData(results);
      this.providerObject.tabs[1].results=CommonUtils.prepareGeneralInfoObject(results);
      this.populateAddresses(this.providerObject.tabs[1].results);
    };
  };

  mapExpand(event): void{

  }

  activeTab(event){
    this.providerObject.tabs.forEach((value)=>{
      if(value.label==event.label){
        value.active=true;
      }
    })
  }
  getSpecialityName(result){
    return result.pri_spec;
  }
}
