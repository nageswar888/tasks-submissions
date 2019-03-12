import {CommonUtils} from "../common/CommonUtils";

declare let google: any;
import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router, NavigationEnd } from '@angular/router';
import {DataService} from "../common/DataService";
import {MapsAPILoader} from "@agm/core";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})

export class NavigationComponent implements OnInit{
  @Input() locationResults;

  @Output() autoCompleteValue = new EventEmitter();
  @Output() selectedNavigationObject = new EventEmitter();
  @Output() setGeoLocation = new EventEmitter();
  public navigationTabs;
  public distanceOptions: any = [];
  public defaultDistanceOption: any;
  inputForm: FormGroup;
  public distanceValue;
  public selectedLocation;
  public invalid: boolean = false;
  public position = 'above';
  public isLocateMeActive: boolean = false;
  @ViewChild("location1") locationElement: ElementRef;
  constructor(private fb: FormBuilder, private mapsAPILoader:MapsAPILoader,private commonUtils: CommonUtils, private router:Router){

  }
  ngOnInit() {
    this.navigationTabs = {tabs:[
      {title:'Provider Type',type:'provider',label1:'',label2:'',selected:false},
      {title:'Verify Location',type:'auto-completer',label1:'label.find.care.providers',
        label2:'label.verify.your.location',selected:true},
      {title:'Additional Details',type:'details',label1:'label.tell.us',
        label2:'label.personalize.results',selected:false, detailOptions:[
        {label:'label.medical.conditions'},
        {label:'label.desirable.procedures'},
        {label:'Add Desired Medical Specialties'},
        {label:'Add Medicare Plan'}]}
    ]};
    this.distanceOptions =  [
      {id:'10', value: '10 miles'},
      {id:'20', value: '20 miles'},
      {id:'50', value: '50 miles'},
      {id:'100', value: '100 miles'}
    ];
    this.defaultDistanceOption = this.distanceOptions[0].id;

    this.inputForm = this.fb.group({
      location: new FormControl('',[Validators.required]),
      distance: new FormControl('')
    });
  };
  selectTab(tab,location){
    let navigationObject
    if (this.inputForm.valid) {
      if (this.navigationTabs.tabs[0].title == tab.title) {
        this.navigationTabs.tabs[0].selected = false;
        this.navigationTabs.tabs[1].selected = true;
      } else if (this.navigationTabs.tabs[1].title == tab.title) {
        this.navigationTabs.tabs[1].selected = false;
        this.navigationTabs.tabs[2].selected = true;
      }
      if (tab.type == 'details') {
        navigationObject = {
          location: location ? location : '',
          distance: this.distanceValue ? this.distanceValue : this.defaultDistanceOption
        }
      }
      this.selectedNavigationObject.emit(navigationObject)
    }else {
      this.invalid = true;
    }
  };

  /**
   * get the results of the locations by the user input
   * @param event
   */
  getLocationResults(event) {
    this.isLocateMeActive=false;
    if (event.target.value.length > 0) {
      this.autoCompleteValue.emit(event);
    } else {
      this.locationResults.length = 0;
    }
  };
  onLocationSelect(event){
    this.setGeoLocation.emit(event);
  };
  clearData(event){
    this.inputForm.controls['location'].setValue('');
    this.inputForm.controls['location'].reset();
    this.locationResults=[];
  };
  distanceChanged = (event) => {
    this.inputForm.controls['distance'].setValue(event.value)
    this.defaultDistanceOption = event.value;
    this.distanceValue=event.value;
  };

  /**
   * Browser requests to know user's location
   */
  getLocation = (): void => {
    if (window.navigator.geolocation) {
      this.isLocateMeActive = true;
      window.navigator.geolocation.getCurrentPosition((position) => {
        this.getZipCode(position);
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
      geocoder.geocode({
        'latLng': latlng
      }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results) {

            let zipCodes = this.commonUtils.filterZipCodes(results);
            if(zipCodes.length > 0) {
              this.isLocateMeActive=false;
              this.selectedLocation=zipCodes[0];
              this.inputForm.controls['location'].setValue(zipCodes[0]);
              this.inputForm.controls['location'].markAsDirty();
              this.locationElement.nativeElement.click();
              let element: HTMLElement=document.getElementById('location1') as HTMLElement
              element.click();
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
  tabSelected(tab){
    if(tab.type == 'provider'){
      this.router.navigate(['/home']);
    }
    if(tab.type == 'details' ){
      if(this.inputForm.valid){
        this.navigationTabs.tabs.forEach(tab => tab.selected = false);
        tab.selected = true;
      } else {
        this.invalid = true;
      }
    } else{
      this.navigationTabs.tabs.forEach(tab => tab.selected = false);
      tab.selected = true;
    }

  }

}
