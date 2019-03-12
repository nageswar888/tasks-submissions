
import {debounceTime} from "rxjs/internal/operators/debounceTime";
declare let google: any;
import {Component, OnInit, ElementRef, OnDestroy, ViewChild, EventEmitter, AfterViewInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MapsAPILoader, GoogleMapsAPIWrapper  } from '@agm/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
import * as _ from "lodash";


import {CommonUtils, PHYSICIAN_TABSET_TITLES, PHYSICIANTYPE, SPECIALTYTYPE} from "../common/CommonUtils";
import { DataService } from "../common/DataService";
import { SPECIALITES } from "../common/CommonUtils";

import { SearchHealthCareProviderService } from "./home.service";

import { LocalStorage } from "@ngx-pwa/local-storage";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {
  public providerType: any;
  public location: any = '';
  public speciality: any = '';
  public searchObj :any;
  public locationResults: any[] = [];
  public providerOptionSelected: boolean = false;
  private currentStep = 0;
  private documentAliasObj: any;
  public stepsForm: FormGroup;
  public providersSelectedCount:number = 0;
  public invalid: boolean = false;
  public navigationSubscription: any;
  public providerOptions: any[] = [];
  @ViewChild("location") locationElement: ElementRef;
  public providersList: any = [];
  public specialtyList: any = [];
  public allResults: any = [];
  public searchString: any;
  public typeOfProvider;
  public physicianTabSetTitles = PHYSICIAN_TABSET_TITLES;
  // public isTileSelected=false;
  public showPanel: boolean = false;
  private physicianType = PHYSICIANTYPE;
  private specialtyType = SPECIALTYTYPE;
  public position='above';
  public myFocusTriggeringEventEmitter = new EventEmitter<boolean>();
  public isLocateMeActive: boolean = false;
  public specialtyOptions = SPECIALITES;
  private filteredSpecialties: any = [];
  private optionSelected: boolean = false;
  constructor(private commonUtils: CommonUtils, private mapsAPILoader:MapsAPILoader, private elementRef: ElementRef, private router: Router,
              private formBuilder: FormBuilder, private dataService: DataService, private searchService: SearchHealthCareProviderService,
              private localStorage:LocalStorage) {
    this.documentAliasObj = this.elementRef.nativeElement.ownerDocument;
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.reInitialize();
      }
    });
  }

  reInitialize() {
    this.optionSelected = false;
    this.locationResults = [];
    this.showPanel = false;
    this.stepsForm = this.formBuilder.group({
      providers: new FormControl(''),
      location: new FormControl('', [Validators.required]),
      specialty: new FormControl('')
    });

    this.stepsForm.controls['specialty'].valueChanges.debounceTime(500).subscribe(data => {
      if(data && !this.optionSelected) {
        this.loadAutoCompleterData(data)
      } else {
        this.optionSelected = false;
        this.showPanel = false;
        this.providersList.length = 0;
      }
    })


    // this.specialtyControl = new FormControl();
    this.providerOptions = [
      {icon: "mdi mdi-stethoscope", label:"Physician", id: "physician", selected: false, logo: 'physician-female'},
      {icon: "mdi mdi-hospital-building", label:"Hospital", id: "hospital", selected: false, logo: 'hospital'},
      {icon: "mdi mdi-home-heart", label:"Nursing Home", id: "nursingHome", selected: false, logo: 'nursing-home'},
      {icon: "mdi mdi-hotel", label:"Hospice", id: "hospice", selected: false, logo: 'hospice'},
      {icon: "mdi mdi-home-plus", label:"Home Health", id: "homeHealth", selected: false, logo: 'home-health'},
      {icon: "mdi mdi-water", label:"Dialysis Facility", id: "dialysisFacility", selected: false, logo: 'dialysis-facility'},
      {icon: "mdi mdi-timer-sand", label:"Long Term Care", id: "longTermCare", selected: false, logo: 'long-term-care'},
      {icon: "mdi mdi-human", label:"In-Patient Rehab", id: "inPatientRehab", selected: false, logo: 'in-patient-rehab'},
    ];

    this.searchObj = [
      {label: "Provider Types", prop: 'providers', type: "multi-select", values: [], options: this.providerOptions, placeHolder: "Select provider type" },
      {label: 'Speciality, procedure, condition ...', prop: 'specialty', type: "auto-completer", value: '', options: {}, placeHolder: "Speciality", results:[] },
      {label: "Location", type: "auto-completer", value: '', prop: 'location', geo: '', distance: 10, options: {}, placeHolder: "City or ZIP code", results: []},
      {prop: 'rating', value :''},
      {prop: 'sortParam', value: 'closest'}
    ];
    this.providerOptionSelected = false;
    this.invalid = false;
    this.providersSelectedCount = 0;
    this.providerType = '';
    this.location = '';
    this.speciality = '';
    this.providerOptionSelected = false;
    this.dataService.setShowSearchBar(false);
    this.dataService.setSearchObject(this.searchObj);
  }

  ngOnInit() {
    this.reInitialize();
  }

  /**
   *
   * @param event
   */
  public onProviderSelect = (event: any): void => {
    let provider = _.find(this.providerOptions, { label: event.label});
    if(!provider.selected) {
      this.providersSelectedCount++;
      provider.selected = true;
      this.providerType = event.label;
      this.searchObj[0].values.push(event.label);
    } else {
      this.searchObj[0].values.splice(this.searchObj[0].values.indexOf(event.label), 1);
      provider.selected = false;
      this.providersSelectedCount--;
    }
  };
  /**
   * After selecting multiple providers move to next level
   */
  public nextLevel = () => {
    // this.circles[this.currentStep].classList.add('active');
    // this.circles[this.currentStep].classList.add('circle-border-green');
    this.locationResults=[];
    this.stepsForm.controls['providers'].setValue(this.searchObj[0].values);
    this.invalid = false;
    this.providerOptionSelected = true;
  };

  /**
   * Browser requests to know user's location
   */
  getLocation = (): void => {
    this.stepsForm.controls['location'].markAsDirty();
    this.stepsForm.controls['location'].markAsTouched();

    if (window.navigator.geolocation) {
      this.isLocateMeActive = true;
      window.navigator.geolocation.getCurrentPosition((position) => {
        this.getZipCode(position);
        this.myFocusTriggeringEventEmitter.emit(true);
      }, (error) => {
        this.isLocateMeActive = false;
        console.log(error);
      });
    }
  };

  /**
   * Get the zip code based on longitude and latitude
   * @param position
   */
  getZipCode = (position:any): void => {
    this.mapsAPILoader.load().then(() => {
      let latlng = new google.maps.LatLng({lat: position.coords.latitude, lng: position.coords.longitude});
      let geocoder = new google.maps.Geocoder();
      let obj = _.find(this.searchObj, {prop: 'location'});
      obj.geo = position.coords.latitude+','+position.coords.longitude;
      geocoder.geocode({
        'latLng': latlng
      }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results) {
            let zipCodes = this.commonUtils.filterZipCodes(results);
            if(zipCodes.length > 0) {
              this.isLocateMeActive=false;
              this.stepsForm.controls['location'].setValue(zipCodes[0]);
              this.locationElement.nativeElement.click();
              this.documentAliasObj.querySelector(".location-input").click();
              this.stepsForm.controls['location'].markAsDirty();
            } else {
              console.log("Location not found");
            }
          } else {
            console.log("Location not found");
          }
        }
      });
    });
  };


  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  /**
   * To search on specialty
   */
  searchProvidersWithSpeciality = (formValue) => {
    this.submitForm(formValue);
  };

  submitForm = (formValue) => {
    if (this.stepsForm.valid) {
      if(!this.providerOptions[0].selected) {
        this.searchObj[0].values.push('Physician');
      }
      this.setSearchObject(formValue);
      this.dataService.setSearchObject(this.searchObj);
      this.localStorage.setItem('searchObject',this.searchObj).subscribe(()=>{
        this.router.navigate(['/search-results']);
        this.dataService.setShowSearchBar(true);
        this.dataService.setSearchObject(this.searchObj);
      });
    } else {
      this.invalid = true;
    }
  };


  /**
   * Set search Object with form values
   */
  setSearchObject = (formValue) :void => {
    for(let key in formValue) {
      let row = _.find(this.searchObj, ['prop', key]);
      row['value'] = formValue[key];
    }
  };

  /**
   * Get the matching location results based on user input
   * @param event
   */
  public getLocationResults = (event: any) => {
    this.locationResults.length = 0;
    this.isLocateMeActive=false;
    if(event.keyCode!=37 && event.keyCode!=38 && event.keyCode!=39 && event.keyCode!=40 && event.keyCode!=13) {
      if(event.target.value.length  > 0) {
        this.dataService.getLocationResults({q: event.target.value,
          limit: 20, offset: 0}).subscribe((response) => {
          setTimeout (() => {
            this.locationResults = response.rows;
          }, 200);
        },error2 => {
          console.log("Error! No  records found",error2)
        });
      }else {
        this.locationResults.length = 0;
      }
    }
  };

  /**
   * Filter auto-completer results for specialty and physicians
   * @param event
   */
  loadAutoCompleterData = (data) => {
    this.allResults.length = 0;
    this.providersList.length = 0;
    this.specialtyList.length = 0;
    this.showPanel = true;
    this.getAutoCompleterData(data);
  }


  /**
   * Fetch auto completer data
   * @param event
   */
  getAutoCompleterData = (event: any): void => {
    this.searchString = event.toLowerCase();
    this.filteredSpecialties.length = 0;
    this.allResults.length = 0;
    this.providersList.length = 0;
    this.specialtyList.length = 0;
    this.searchService.getAutoCompleterData({q: event, limit: 10, offset: 0})
      .subscribe((response) => {
        this.filteredSpecialties = _.filter(this.specialtyOptions, row =>row.name.toLowerCase().indexOf(event.toLowerCase()) > -1);
        this.populateResults(response, event.toString().toLocaleLowerCase());
      },error => {
        console.log("Error! No  records found ",error)
      });
  }

  /**
   * Populate auto completer results get the results and iterate over them and find the type of restult
   * to push into type of result
   * @param response
   * @param searchString
   */
  populateResults = (response, searchString) => {
    this.allResults.length = 0;
    this.providersList.length = 0;
    this.specialtyList.length = 0;
    let searchPattern = new RegExp(searchString, "i");
    for(let row of response) {
      let obj = {};
      obj['name'] = row.mid_nm? row.frst_nm+" "+row.mid_nm+" "+row.lst_nm : row.frst_nm+" "+row.lst_nm;
      obj['type'] = 'Physician';
      obj['id'] = row.ind_pac_id;
      this.providersList.push(obj);
    }
    this.providersList = _.uniqBy(this.providersList, 'name');
    this.providersList = this.sortOnSearchStringPosition(this.providersList, searchString);
    this.filteredSpecialties = this.sortOnSearchStringPosition(this.filteredSpecialties, searchString);
    let limit = this.filteredSpecialties.length>8 ? 8 : this.filteredSpecialties.length;
    this.specialtyList = this.filteredSpecialties.slice(0,limit);
    this.allResults = this.specialtyList.concat(this.providersList);
  }

  /**
   * Sort results based on the position of search string
   * @param list
   * @param searchString
   * @returns {any}
     */
  sortOnSearchStringPosition = (list,searchString) => {
    if(searchString.split(" ").length>1) {
        list.filter(row => {
          let nameStr = row.name.split(" ")[0];
          row['index1'] = nameStr.toLowerCase().indexOf(searchString[0].toLowerCase());
          let nameStr1 = row.name.split(" ")[row.name.split(" ").length-1];
          row['index2'] = nameStr1.toLowerCase().indexOf(searchString[1].toLowerCase());
        });
      return _.sortBy(list, ['index1', 'index2']);
    }else {
      list.filter(row => {
        row['index'] = row.name.toLowerCase().indexOf(searchString.toLowerCase());
      });
      return _.sortBy(list, obj => obj.index);
    }
  }


  /**
   * To clear the text in form fields
   * @param event
   */
  clear = (event) => {
    this.searchString = '';
    this.invalid = false;
    this.showPanel = false;
    this.stepsForm.controls[event].setValue('');
    this.stepsForm.controls[event].reset();
    if(event === 'location') {
      this.locationResults = [];
    } else {
      this.providersList = [];
      this.specialtyList = [];
      this.allResults = [];
    }
  }

  providerSelected(id) {
    this.router.navigate(['provider/' + id+'/'+this.typeOfProvider]);
  }
  /**
   * On selecting a provider
   * @param event
   */
  onOptionSelect(event) {
    this.optionSelected = true;
    if(event.option.viewValue.includes("id:") && event.option.viewValue.substring(event.option.viewValue.indexOf("id:")+3)) {
      this.localStorage.setItem('searchObject',this.searchObj).subscribe(()=>{
        let id = event.option.viewValue.substring(event.option.viewValue.indexOf("id:")+3);
        this.router.navigate(['provider/' + id+'/'+'physician']);
      });
    }
  }

  /**
   * On selecting a location set the geo value in search object
   * @param event
   */
  onLocationSelect = (event) => {
    let location = _.find(this.locationResults, {zip_code: event.option.value.slice(-5)});
    let obj = _.find(this.searchObj, {prop: 'location'});
    obj.geo = location.latitude+','+location.longitude;
  }

  navigationData(data){
    if(data){
      this.searchObj[2].distance=data.distance;
      this.searchObj[2].value=data.location;
      this.stepsForm.controls['location'].setValue(data.location);
      let formValue={providers:'',location:data.location,specialty:''};
      this.submitForm(formValue);
    }
  }
}
