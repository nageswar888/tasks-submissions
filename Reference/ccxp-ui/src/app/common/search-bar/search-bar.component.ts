import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
import { DataService } from "../DataService";
import { SPECIALITES } from "../CommonUtils";
import { LocalStorage } from "@ngx-pwa/local-storage";
import * as _ from "lodash";
import {CommonUtils} from "../CommonUtils";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {

  @Output() autoCompleterEmitter = new EventEmitter();
  public locationResults: any;
  public searchCriteriaObject: any;
  public searchForm: FormGroup;

  public specialtyOptions = SPECIALITES;
  public filteredResults: any;
  @Input() set searchObject(object: any) {
    this.searchCriteriaObject = object;
    if(object) {
      this.populateSearchBar(object);
    } else {
      this.searchCriteriaObject = this.searchObj;
      this.localStorage.setItem('searchObject',this.searchObj).subscribe(()=>{});
      this.populateSearchBar(this.searchObj);
    }

  }

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
  private searchObj =  [
    {label: "Provider Types", prop: 'providers', type: "multi-select", values: [], options: this.providerOptions, placeHolder: "Select provider type" },
    {label: 'Speciality, procedure, condition ...', prop: 'specialty', type: "auto-completer", value: '', options: {}, placeHolder: "Speciality", results:[] },
    {label: "Location", type: "auto-completer", value: '', prop: 'location', geo:'', distance: 10, options: {}, placeHolder: "City or ZIP code", results: []},
    {prop: 'rating', value :''}
    // {label: 'Keyword', type: "input", value: '', prop: 'keyword', options: {}, placeHolder: "Keyword"}
  ];

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private localStorage:LocalStorage, private commonUtils: CommonUtils) { }

  ngOnInit() {
  }
  ngAfterViewInit() {}


  /**
   * to populate the search obtained from the home page
   * @param object
   */
  populateSearchBar = (object: any): void => {
    this.searchForm = this.formBuilder.group({
      providers: new FormControl(object[0].values),
      specialty: new FormControl(object[1].value),
      location: new FormControl(object[2].value),
     // keyword: new FormControl(object[3].value)
    });
  }

  /**
   * To clear the text in form fields
   * @param event
   */
  clear = (event) => {
    this.locationResults = [];
    let obj = this.commonUtils.findObject(this.searchCriteriaObject,'prop',event);
    obj.results = [];
    this.searchForm.controls[event].setValue('');
  }


  /**
   * Emit entered key value to parent component
   * @param event
   */
  public autoComplete = (event: any, type: any) => {
    if(event.keyCode!=38 && event.keyCode!=40) {
      // this.autoCompleterEmitter.emit({value: event, type: type});
      if(type === 'location') {
        this.getLocationResults(event);
      } else if(type === 'specialty') {
        this.getSpecialities(event);
      }
    }
  }

  emitSearchForm = () => {
    this.searchCriteriaObject[0].values = this.searchForm.controls['providers'].value;
    this.searchCriteriaObject[1].value = this.searchForm.controls['specialty'].value;
    this.searchCriteriaObject[2].value = this.searchForm.controls['location'].value;
    //this.searchCriteriaObject[3].value = this.searchForm.controls['keyword'].value;
    //this.searchCriteriaObject[4].value = this.searchForm.controls['keyword'].value;

    let rating = this.commonUtils.findObject(this.searchCriteriaObject,'prop','rating');
    rating.value = '';
    let location = this.commonUtils.findObject(this.searchCriteriaObject,'prop','location');
    location.distance = 10;
    this.dataService.setSearchObject(this.searchCriteriaObject);
  }

  /**
   * Get the matching location results based on user input
   * @param event
   */
  private getLocationResults = (event: any) => {
    if(event.target.value.length  > 1) {
      this.dataService.getLocationResults({q: event.target.value,
        limit: 20, offset: 0}).subscribe((response) => {
        this.searchCriteriaObject[2].results = response.rows;
        this.searchCriteriaObject[2].options = response.rows;
      },error2 => {
        console.log("Error! No  records found",error2)
      });
    }else {
      this.searchCriteriaObject[2].results = [];
    }
  }

  /**
   * To filter auto-completer for specialities
   * @param event
   */
  private getSpecialities = (event) => {
    this.searchCriteriaObject[1].results = _.filter(this.specialtyOptions, row=>row.location_text.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1);
  }

  /**
   * On selecting a location from auto completer
   * @param event
   */
  onOptionSelected = (event) => {
    if(event.latitude && event.longitude) {
      let provider = _.find(this.searchObj, {prop: 'location'});
      provider.geo = event.latitude+','+event.longitude;
    }
  }
}
