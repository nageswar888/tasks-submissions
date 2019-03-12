import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, NavigationStart, RoutesRecognized } from '@angular/router';
import { LocalStorage } from "@ngx-pwa/local-storage";
import * as _ from "lodash";

import { DataService } from "../common/DataService";
import { SearchHealthCareProviderService } from "../home/home.service";
import {filter} from "rxjs/internal/operators/filter";
import {pairwise} from "rxjs/internal/operators/pairwise";
import {CommonUtils} from "../common/CommonUtils";
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})
export class SearchResultsComponent implements OnInit {

  public dataLoaded:boolean =  false;
  public totalCount: any =  0;
  public limit = 10;
  private searchQuery: any = [];
  public markerAddresses: any = [];
  public results: any = [];
  public page:any = 1;
  public selectedProviders: any[] = [];
  private itemsPerPage = [
    {id: 5, value: 5},
    {id: 10, value: 10},
    {id: 15, value: 15}
  ];
  public isCompareAccExpanded: boolean = false;
  public compareProviderType: string;
  public isMapExpand:boolean;
  private userLocation: any;
  private localStorageSub: any;
  private searchObjectSubscribe: any;
  private previousUrl: string = undefined;
  public specialty: any;
  public location: any;
  public distanceOptions: any = [];
  public ratingOptions: any = [];
  public sortOptions: any = [];
  private geo: any;
  public selectedProvider: any = 'Physicians';
  public defaultDistanceOption: any;
  public rating;
  public defaultSortOption : any;
  public showMap: boolean = true;
  private providerOptions: any[] = [
    {icon: "mdi-stethoscope", label:"Physician", id: "physician", selected: false},
    {icon: "mdi-hospital-building", label:"Hospital", id: "hospital", selected: false},
    {icon: "mdi-home", label:"Nursing Home", id: "nursingHome", selected: false},
    {icon: "mdi-hotel", label:"Hospice", id: "hospice", selected: false},
    {icon: "mdi-hospital", label:"Home Health", id: "homeHealth", selected: false},
    {icon: "mdi-water", label:"Dialysis Facility", id: "dialysisFacility", selected: false},
    {icon: "mdi-timer-sand", label:"Long Term Care", id: "longTermCare", selected: false},
    {icon: "mdi-human", label:"In-Patient Rehab", id: "inPatientRehab", selected: false},
  ];
  public searchObject =  [
    {label: "Provider Types", prop: 'providers', type: "multi-select", values: [], options: this.providerOptions, placeHolder: "Select provider type" },
    {label: 'Speciality, procedure, condition ...', prop: 'specialty', type: "auto-completer", value: '', options: {}, placeHolder: "Speciality", results:[] },
    {label: "Location", type: "auto-completer", value: '', prop: 'location', geo:'', distance: 10, options: {}, placeHolder: "City or ZIP code", results: []},
    {prop: 'rating', value :''}
    // {label: 'Keyword', type: "input", value: '', prop: 'keyword', options: {}, placeHolder: "Keyword"}
  ];
  constructor(private dataService: DataService, private searchService: SearchHealthCareProviderService,
              private localStorage:LocalStorage, private router: Router, private activatedRoute: ActivatedRoute,
              private commonUtils: CommonUtils) {
  }

  ngOnInit() {

    this.previousUrl = this.commonUtils.getPreviousUrl();
    this.compareProviderType = 'Providers';
    this.dataService.setShowSearchBar(true);
    this.localStorageSub = this.localStorage.getItem('searchObject').subscribe((searchObject)=> {
      this.searchObject = searchObject;
      this.defaultDistanceOption = this.commonUtils.findObject(searchObject,'prop','location').distance;
      this.clearAllSections();
      this.searchHealthCareProviders(searchObject);
      // this.dataLoaded = true;
      //if(this.previousUrl === '/search-results') {
      //  this.searchHealthCareProviders(searchObject);
      //} else {
      //  this.dataLoaded = true;
      //}
    });
    this.initializeFilters();
  }

  ngAfterViewInit() {
    /*this.searchObjectSubscribe = this.dataService.searchObjectObservable.subscribe( searchObject => {
     this.localStorage.setItem('searchObject',searchObject).subscribe(()=>{});
     this.clearAllSections();
     this.initializeFilters();
     this.searchHealthCareProviders(searchObject);
     });*/
  }

  initializeFilters () {
    this.distanceOptions =
      [{id:'10', value: '10 Miles'},
      {id:'20', value: '20 Miles'},
      {id:'50', value: '50 Miles'},
      {id:'100', value: '100 Miles'}
    ];
    this.defaultDistanceOption = this.distanceOptions[0].id;

    this.ratingOptions = [
      {id:'1', value: '1'},
      {id:'2', value: '2'},
      {id:'3', value: '3'},
      {id:'4', value: '4'},
      {id:'5', value: '5'}
    ];

    this.sortOptions = [
      {id:'closest', value: 'Closest to me'},
      {id:'rating', value: 'Rating'}
    ];

    this.defaultSortOption =  this.sortOptions[0].id;
  }


  /**
   *
   * @param event
   */
  searchHealthCareProviders = (searchObject: any): void => {
    let location =  this.commonUtils.findObject(searchObject,'prop','location');
    this.location = location.value;
    this.geo =  this.commonUtils.findObject(searchObject,'prop','location').geo;
    this.specialty = this.commonUtils.findObject(searchObject,'prop','specialty').value;
    this.rating = this.commonUtils.findObject(searchObject,'prop','rating').value;
    this.searchQuery = searchObject;
    this.localStorage.setItem('searchObject',searchObject).subscribe(()=>{});
    if(location.geo) {
      this.userLocation = {lat: location.geo.split(",")[0], lng: location.geo.split(",")[1]};
    }else {
      //Get user location
      this.dataService.getLatLongByAddress( searchObject[2]['value']).then((result) => {
        if(result.length > 0) {
          this.userLocation = {lat: result[0].y, lng: result[0].x};
        }
      });
    }
    this.dataService.setSearchLocation(this.userLocation);

    this.searchService.searchProvider(this.buildQuery(searchObject)).subscribe((response) => {
      this.dataLoaded = true;
      if(response.totalItems > 0) {
        this.totalCount = response.totalItems;
        this.results = this.populateResults(response.data.items);
      } else {
        this.results = [];
      }
    },(error) => {
      console.log("Error! No records found ",error)
    });
  };

  getProviderFullName = (provider: any): string => {
    let fullName = provider.frst_nm? provider.frst_nm : '';
    fullName += provider.mid_nm? ' '+ provider.mid_nm : '';
    fullName += provider.lst_nm? ' '+ provider.lst_nm : '';
    return fullName;
  };

  /**
   * Fetch address of providers usign
   * @param providers
   */
  getAddress = (providers: any): void => {
    this.markerAddresses = [];
    providers.forEach((provider, index) => {
      if(provider.location) {
        this.markerAddresses.push({'address':provider.adr_ln_1+","+provider.cty,
          'coordinates': {lat: provider.location.coordinates[0], lng: provider.location.coordinates[1]},
          'serialNo': ((this.page-1)*this.limit + index+1),
          'fullName': this.getProviderFullName(provider) });
      }else {
        this.markerAddresses.push({'address':provider.adr_ln_1+","+provider.cty,
          'serialNo': ((this.page-1)*this.limit + index+1)});
      }
    });
    this.markerAddresses.push({'coordinates':{lng: this.userLocation.lat, lat: this.userLocation.lng}, 'label': 'Your Location'});
  };

  /**
   *
   * @param params
   * @returns {any}
   */
  buildQuery = (event):any => {
    let query = {
      q: '',limit: this.limit,
      location: this.commonUtils.findObject(event,'prop','location').value,
      specialty: this.commonUtils.findObject(event,'prop','specialty').value,
      geo: this.commonUtils.findObject(event,'prop','location').geo,
      distance: this.commonUtils.findObject(event,'prop','location').distance,
      rating: this.commonUtils.findObject(event,'prop','rating').value,
      sortParam: this.commonUtils.findObject(event,'prop','sortParam').value
    };
    if(event.offset)
      query ['offset'] = event.offset;
    else {
      this.page = 1;
      query['offset'] = 0;
    }
    return query;
  };


  /**
   * Add marked & serialNo fields to the providers
   * @param results
   * @returns {any}
   */
  populateResults = (results: any) => {
    //load marker Addresses
    this.getAddress(results);
    if(this.selectedProviders){
      results.forEach((provider, index) => {
        provider['serialNo']= (this.page-1)*this.limit + index+1;
        this.addDistanceToProvider(provider);
        this.selectedProviders.forEach((val)=>{
          if(val.marked &&  val.ind_pac_id == provider.ind_pac_id){
            { provider.marked = 1; }
          } else if(!val.marked){
            { provider.marked = 0; }
          }
        })
      });
    } else{
      results.forEach((card, index)=>{
        card['marked']=0;
        card['serialNo']= (this.page-1)*this.limit + index;
        this.addDistanceToProvider(card);
      })
    }
    return results;
  };

  public addDistanceToProvider = (provider) => {
    if(!provider.distance) {
      this.dataService.getLatLongByAddress( provider.adr_ln_1+","+provider.cty ).then((result) => {
        if(result.length > 0 && this.userLocation) {
          provider['distance'] = this.dataService.getDistance({lat:result[0].y, lng: result[0].x}, this.userLocation);
        }
      });
    }
  };

  /**
   * To exapnd the map
   * @param event
   */
  mapExpand = (event: any)=>{
    this.isMapExpand = event;
  };

  /**
   * To move next page
   */
  onNext = (): void => {
    this.page++;
    this.searchQuery['offset'] = (this.page-1)* this.limit;
    this.searchHealthCareProviders(this.searchQuery);
  };


  /**
   * To move previous page
   */
  onPrev = (): void => {
    this.page--;
    this.searchQuery['offset'] = (this.page - 1) * this.limit;
    this.searchHealthCareProviders(this.searchQuery);
  }

  /**
   * providers need to compare
   * @param providers list of providers
   */
  providersToCompare = (provider: any) => {
    /*Todo: check the provider type for others ( hospital )*/
    if(provider.marked){
      this.selectedProviders.push(provider);
    } else{
      let cardIndex = _.findIndex(this.selectedProviders, function(o) {
        return o.ind_pac_id == provider.ind_pac_id;
      });
      if(cardIndex>=0){
        this.selectedProviders.splice(cardIndex,1);
      }
    }
    this.updateProviderType();
  };


  /**
   * Clear all data sections if clear-all event is raised
   */
  clearAllSections = () => {
    this.selectedProviders=[];
    this.results.forEach((card)=>{
      card['marked']=0;
    });
    this.updateProviderType();
  };

  /**
   * Remove the data from the section if clear event is raised of that particular section
   * @param id
   */
  removeSelectedCard = ( id ) => {
    let cardIndex = _.findIndex(this.selectedProviders, function(o) {
      return o.ind_pac_id == id;
    });
    if(cardIndex>=0){
      this.selectedProviders.splice(cardIndex,1);
    }
    this.results.forEach((card)=>{
      if(card.ind_pac_id==id){
        card['marked']=0;
      }
    });
    this.updateProviderType();
  };

  /**
   * update the selected provider type to compare
   */
  updateProviderType = ( ) => {
    this.compareProviderType = this.selectedProviders.length > 0 ? 'Physicians' : 'Providers';
  };

  /**
   *
   * @param event
   */
  onCompareAccClosed = (event) => {
    this.isCompareAccExpanded = false;
  };

  /**
   *
   * @param event
   */
  onCompareAccOpened = (event) => {
    this.isCompareAccExpanded = true;
  };

  ngOnDestroy() {
    // this.searchObjectSubscribe.unsubscribe();
    this.commonUtils.history = [];
  }

  /**
   * To filter results on within selected distance
   * @param event
   */
  distanceChanged = (event) => {
    let searchObject = this.searchQuery;
    let obj = this.commonUtils.findObject(searchObject,'prop','location');
    obj.distance = event.value;
    this.defaultDistanceOption = event.value;
    this.page = 1;
    this.searchQuery['offset'] = 0;
    this.searchHealthCareProviders(searchObject);
  }
  /**
   * To filter results on within selected rating
   * @param event
   */
  ratingChanged = (event) => {
    let searchObject = this.searchQuery;
    let obj = this.commonUtils.findObject(searchObject,'prop','rating');
    obj.value = event.value;
    this.page = 1;
    this.searchQuery['offset'] = 0;
    this.searchHealthCareProviders(searchObject);
  }

  /**
   * To sort data on change sort filters
   * @param event
     */
  changeSortOption = (event) => {
    let searchObject = this.searchQuery;
    let obj = this.commonUtils.findObject(searchObject,'prop','sortParam');
    obj.value = event.value;
    this.page = 1;
    this.searchQuery['offset'] = 0;
    this.searchHealthCareProviders(searchObject);
  }

  /**
   * To show or hide the map
   */
  toggleMap = () => {
    this.showMap = !this.showMap;
  }

  /**
   * To compare providers
   */
  compareSelectedProviders() {
    if (this.selectedProviders.length > 1) {
      this.localStorage.removeItem('selectedProviderWithGeo').subscribe(() => {
      });
      this.localStorage.setItem('selectedProviderWithGeo', {providers: this.selectedProviders, geo: this.geo }).subscribe(()=> {
        this.router.navigate(['/compare-providers']);
      });
    } else {
      console.log("No Providers Selected");
    }
  }
}

