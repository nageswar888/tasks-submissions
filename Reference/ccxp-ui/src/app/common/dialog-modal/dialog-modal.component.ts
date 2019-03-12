import {Router} from "@angular/router";

declare let google: any;
import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {DataService} from "../DataService";
import {CommonUtils, SPECIALITES} from "../CommonUtils";
import * as _ from "lodash";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MapsAPILoader} from "@agm/core";
@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.sass']
})

export class DialogModalComponent implements OnInit{
  @Input() type;
  @Input() providerOptionSelected;
  @Input() modalObject;
  @Input() locationResults;
  @Input() filteredResults;
  @Input() providersList;
  @Input() searchString;

  @Output() selectedLocation=new EventEmitter();
  @Output() onClose = new EventEmitter();
  @Output() searchData =new EventEmitter();
  @Output() resetPreviousModal = new EventEmitter();
  @Output() autoCompleteValue = new EventEmitter();
  @Output() autoCompleteValue2 = new EventEmitter();
  @Output() submitData = new EventEmitter();
  @Output() locateMe =new EventEmitter();
  @Output() clear =new EventEmitter();
  @Output() locationSelected = new EventEmitter();
  @Output() providerSelected = new EventEmitter();
  inputForm: FormGroup;
  public specialty;
  public location;
  public providerType;
  public showPanel: boolean = false;
  constructor( private router: Router,private fb: FormBuilder,private mapsAPILoader:MapsAPILoader,private commonUtils: CommonUtils){

  }
  ngOnInit() {
    this.inputForm = this.fb.group({
      location: new FormControl('',[Validators.required]),
      specialty: new FormControl(''),
    })
    this.modalObject.results = [];
  }

  /**
   * get the results of the locations by the user input
   * @param event
   */
  getLocationResults(event) {
    if(event.keyCode!=37 && event.keyCode!=38 && event.keyCode!=39 && event.keyCode!=40) {
      if (event.target.value.length > 0) {
        this.autoCompleteValue.emit(event);
      } else {
        this.locationResults = [];
        this.modalObject.results = [];
      }
    }
  }

  /**
   * close the modal
   */
  closeModal(){
    this.selectedLocation.emit({location:'',providerType:'',specialty:'',isDialogOpened:false});
    this.onClose.emit();
    this.inputForm.controls['location'].setValue('');
    this.inputForm.controls['specialty'].setValue('');
    this.providerOptionSelected=true;
  }

  /**
   * clear the input field
   */
  clearData(event){
    this.locationResults=[];
    this.modalObject.results = [];
    this.inputForm.controls['location'].setValue('');
    this.inputForm.controls['specialty'].setValue('');
    this.inputForm.reset();
    if(event=='specialty'){
      this.clear.emit('specialty')
      this.modalObject.tabsetData = [];
    }

  }

  /**
   * setting the location and selected provider value to the form
   * @param value
   */
  setLocationProviders(value,provider){
    this.providerOptionSelected=false;
    this.location=value.location;
    this.providerType=provider;
    this.selectedLocation.emit({location:value.location,providerType:provider,specialty:'',isDialogOpened:true});
    this.clearData('location');
  }

  /**
   * Filter auto-completer results for specialty
   * @param event
   */
  loadSpecialties = (event) => {
    if(event.keyCode!=37 && event.keyCode!=38 && event.keyCode!=39 && event.keyCode!=40) {
      if (event.target.value.length > 0) {
        this.showPanel = true;
        this.autoCompleteValue2.emit(event)
      } else {
        this.showPanel = false;
      }
    }
  };

  search(value){
    this.searchData.emit({location:this.location,providerType:this.providerType,specialty:value ? value :''})
  }

  /**
   * displays the provider modal
   */
  openLocationModal(){
   this.resetPreviousModal.emit(this.providerType);
    this.clearData('location');
  }
  submitForm(value){
    this.submitData.emit({location:this.location,providers:this.providerType,specialty:value.specialty});
  }

  /**
   * Browser requests to know user's location
   */
  getLocation = (): void => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        this.getZipCode(position);
      }, (error) => {
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
              this.locateMe=zipCodes[0];
              this.inputForm.controls['location'].setValue(zipCodes[0]);
              this.inputForm.controls['location'].markAsTouched();
             // this.inputForm.controls['location'].setErrors({'incorrect': false});
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

  onLocationSelect = (event) => {
    this.locationSelected.emit(event);
  }

  onProviderSelect = (event) => {
    if(event.option.viewValue.includes("id:") && event.option.viewValue.substring(event.option.viewValue.indexOf("id:")+3)) {
      let id = event.option.viewValue.substring(event.option.viewValue.indexOf("id:")+3);
      this.router.navigate(['provider/' + id+'/'+'physician']);
    } else {
      this.submitData.emit({location:this.location,providers:this.providerType,specialty:event.option.value});
    }
  }
}
