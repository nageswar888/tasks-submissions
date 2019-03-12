import { Injectable } from '@angular/core';
import * as _ from "lodash";
import {filter} from "rxjs/internal/operators/filter";
import { Router, NavigationEnd, ActivatedRoute, NavigationStart, RoutesRecognized } from '@angular/router';

export const SPECIALITES = [{name:"CHIROPRACTIC", type: 'Specialty'},
  {name:"ORTHOPEDIC SURGERY", type: 'Specialty'},
  {name:"AUDIOLOGIST", type: 'Specialty'},
  {name:"GERIATRIC PSYCHIATRY", type: 'Specialty'},
  {name: "PHYSICAL MEDICINE AND REHABILITATION", type: 'Specialty'},
  {name:"HEMATOLOGY/ONCOLOGY", type: 'Specialty'},
  {name:"PAIN MANAGEMENT", type: 'Specialty'},  {name:"PHYSICAL THERAPY", type: 'Specialty'},
  {name:"PATHOLOGY", type: 'Specialty'},  {name:"PERIPHERAL VASCULAR DISEASE", type: 'Specialty'},
  {name: "PSYCHIATRY", type: 'Specialty'},
  {name:"GASTROENTEROLOGY", type: 'Specialty'},
  {name:"INTERVENTIONAL PAIN MANAGEMENT", type: 'Specialty'},
  {name: "COLORECTAL SURGERY (PROCTOLOGY)", type: 'Specialty'},
  {name:"RADIATION ONCOLOGY", type: 'Specialty'},
  {name:"PULMONARY DISEASE", type: 'Specialty'},{name: "HAND SURGERY", type: 'Specialty'},  {name:"UROLOGY", type: 'Specialty'},
  {name: "NURSE PRACTITIONER", type: 'Specialty'},
  {name:"RHEUMATOLOGY", type: 'Specialty'},  {name:"UNDEFINED NON-PHYSICIAN TYPE (SPECIFY)", type: 'Specialty'},
  {name:"NEPHROLOGY", type: 'Specialty'},
  {name: "REGISTERED DIETITIAN OR NUTRITION PROFESSIONAL", type: 'Specialty'},
  {name:"PEDIATRIC MEDICINE", type: 'Specialty'},
  {name:"UNDEFINED PHYSICIAN TYPE (SPECIFY)", type: 'Specialty'},
  {name:"ANESTHESIOLOGY", type: 'Specialty'},  {name:"CLINICAL SOCIAL WORKER", type: 'Specialty'},
  {name:"FAMILY PRACTICE", type: 'Specialty'},
  {name: "EMERGENCY MEDICINE", type: 'Specialty'},  {name:"NEUROPSYCHIATRY", type: 'Specialty'},
  {name: "ORAL SURGERY", type: 'Specialty'},  {name: "PHYSICIAN ASSISTANT", type: 'Specialty'},
  {name:"NEUROLOGY", type: 'Specialty'},  {name:"CARDIOVASCULAR DISEASE (CARDIOLOGY)", type: 'Specialty'},
  {name: "INTERVENTIONAL RADIOLOGY", type: 'Specialty'},
  {name:"DENTIST", type: 'Specialty'},  {name:"GYNECOLOGICAL ONCOLOGY", type: 'Specialty'},  {name:"SLEEP MEDICINE", type: 'Specialty'},
  {name: "NEUROSURGERY", type: 'Specialty'},  {name:"OPHTHALMOLOGY", type: 'Specialty'},  {name:"CARDIAC ELECTROPHYSIOLOGY", type: 'Specialty'},
  {name:"MEDICAL TOXICOLOGY", type: 'Specialty'},  {name:"CERTIFIED REGISTERED NURSE ANESTHETIST", type: 'Specialty'},
  {name: "CLINICAL NURSE SPECIALIST", type: 'Specialty'},
  {name:"OTOLARYNGOLOGY", type: 'Specialty'},  {name: "INFECTIOUS DISEASE", type: 'Specialty'},  {name: "GERIATRIC MEDICINE", type: 'Specialty'},
  {name:"HOSPICE/PALLIATIVE CARE", type: 'Specialty'},  {name:"NUCLEAR MEDICINE", type: 'Specialty'},  {name: "CLINICAL PSYCHOLOGIST", type: 'Specialty'},
  {name:"PODIATRY", type: 'Specialty'},
  {name:"VASCULAR SURGERY", type: 'Specialty'},  {name:"OBSTETRICS/GYNECOLOGY", type: 'Specialty'},  {name: "GENERAL PRACTICE", type: 'Specialty'},
  {name:"DIAGNOSTIC RADIOLOGY", type: 'Specialty'},
  {name: "ADVANCED HEART FAILURE AND TRANSPLANT CARDIOLOGY", type: 'Specialty'},  {name: "OCCUPATIONAL THERAPY", type: 'Specialty'},
  {name:"MAXILLOFACIAL SURGERY", type: 'Specialty'},
  {name: "PREVENTATIVE MEDICINE", type: 'Specialty'},  {name: "OSTEOPATHIC MANIPULATIVE MEDICINE", type: 'Specialty'},
  {name: "SURGICAL ONCOLOGY", type: 'Specialty'},
  {name: "HEMATOPOIETIC CELL TRANSPLANTATION AND CELLULAR TH", type: 'Specialty'},  {name:"HEMATOLOGY", type: 'Specialty'},
  {name: "CRITICAL CARE (INTENSIVISTS)", type: 'Specialty'},  {name: "DERMATOLOGY", type: 'Specialty'},
  {name: "SPEECH LANGUAGE PATHOLOGIST", type: 'Specialty'},
  {name: "CERTIFIED NURSE MIDWIFE", type: 'Specialty'},{name:"INTERNAL MEDICINE", type: 'Specialty'},
  {name: "SPORTS MEDICINE", type: 'Specialty'},  {name:"OPTOMETRY", type: 'Specialty'},
  {name:"THORACIC SURGERY", type: 'Specialty'},{name: "ALLERGY/IMMUNOLOGY", type: 'Specialty'},
  {name: "HOSPITALIST", type: 'Specialty'},  {name: "MEDICAL ONCOLOGY", type: 'Specialty'},
  {name:"ADDICTION MEDICINE", type: 'Specialty'},  {name: "ANESTHESIOLOGY ASSISTANT", type: 'Specialty'},
  {name:"PLASTIC AND RECONSTRUCTIVE SURGERY", type: 'Specialty'},
  {name:"INTERVENTIONAL CARDIOLOGY", type: 'Specialty'}, {name:"GENERAL SURGERY", type: 'Specialty'},
  {name:"CARDIAC SURGERY", type: 'Specialty'}, {name:"ENDOCRINOLOGY", type: 'Specialty'}];

  export const PHYSICIAN_PROVIDER_LABELS=[
    {label:'label.primary.speciality',value:'primarySpeciality', type:'text'},
    {label:'label.secondary.specialty',value:'secondarySpeciality', type:'text'},
    {label:'label.quality.rating',value:'qualityRating', type: 'rating'},
    {label:'label.patients.treated',value:'patientsTreated'},
    {label:'label.group.affliations',value:'groupAffiliation', type:'multi-value'},
  ];

  export const GENERAL_INFO=[
    {label:'label.insurance.acc',value:'insurances', type:'text' , subtitle: 'label.your.insurance.not.acc'},
    {label:'label.exp',value:'experience', type:'exp', subtitle:""},
    {label:'label.lang.spoke',value:'languageKnown', type:'lang', subtitle:""},
    {label:'label.gender',value:'gender', type:'text', subtitle:""},
    {label:'label.proximity.location',value:'address',type:'address', subtitle:""},
    {label:'label.phone.number',value:'primaryPhoneNumber', type:'phone', subtitle:""},
    {label:'label.affiliation',value:'hospitalAffiliation', type:'multi-value', subtitle: 'label.why.imp'}
  ];

  export const RATINGS_MEASUREMENTS = [
    {label:'label.overall.patient.exp',value:'overAllRating', type:'rating'},
    {label:'label.patient.rec',value:'patientRec', type:'pie'},
    {label:'label.overall.off.staff',value:'staffRating', type:'rating'},
    {label:'label.ease.appt',value:'apptPercent', type:'pie'},
    {label:'label.avg.cost',value:'cost', type:'cost'},
    {label:'label.patients.treated.2017',value:'patientsTreated', type:'text'}
  ];

  export const CAPABILITIES_CRED = [
    {label:'label.medical.specialities',value:'specialities', type:'multi-value'},
    {label:'label.relevant.edu',value:'qualifications', type:'qualifications'},
    {label:'label.procedures',value:'procedures', type:'multi-value'},
    {label:'label.conditions',value:'conditions', type:'multi-value'},
    {label:'label.board.certifications',value:'experience1', type:''}
  ];

  export const HOSPITAL_LABELS = [
    {label:'label.distance',value:'distance'},
    {label:'label.over.rating',value:'overAllRating'},
    {label:'label.patients.rating',value:'patientsRating'},
    {label:'label.treats',value:'hospitalTreats'},
    {label:'label.patients.treated',value:'patientsTreated'},
    {label:'label.hospital.type',value:'hospitalType'},
  ];
  export const PROVIDER_DETAIL_LABELS = [{label:'label.office.location',value:'address'},
  {label:'label.phone.number',value:'phoneNumber'},{label:'label.inNetwork.insurances',value:'inNetworkInsurance'},{},{}]
  export const PHYSICIAN_TABSET_TITLES = ['Specialty','Providers','Conditions','Procedures'];

     /**
   * Todo if Back End is updated with hospitals results
   * @type {[{provider_id: string; hospital_name: string; address: string; city: string; state: string; zip_code: string; county_name: string; phone_number: string; hospital_type: string; hospital_ownership: string; emergency_services: boolean; hospital_overall_rating: number; hospitals_rdmsn: Array} , {provider_id: string; hospital_name: string; address: string; city: string; state: string; zip_code: string; county_name: string; phone_number: string; hospital_type: string; hospital_ownership: string; emergency_services: boolean; meets_criteria_for_meaningful_use_of_ehrs: boolean; hospital_overall_rating: number; hospitals_rdmsn: Array} , {provider_id: string; hospital_name: string; address: string; city: string; state: string; zip_code: string; county_name: string; phone_number: string; hospital_type: string; hospital_ownership: string; emergency_services: boolean; meets_criteria_for_meaningful_use_of_ehrs: boolean; hospital_overall_rating: number; hospitals_rdmsn: Array}]}
   */
     export const HOSPITALDATA=[
  {
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
  },
  {
    "provider_id": "251334",
    "hospital_name": "CHOCTAW REGIONAL MEDICAL CENTER",
    "address": "8613 MS HWY 12",
    "city": "ACKERMAN",
    "state": "MS",
    "zip_code": "39735",
    "county_name": "CHOCTAW",
    "phone_number": "6622854400",
    "hospital_type": "Critical Access Hospitals",
    "hospital_ownership": "Government - Local",
    "emergency_services": true,
    "meets_criteria_for_meaningful_use_of_ehrs": true,
    "hospital_overall_rating": 2.5,
    "hospitals_rdmsn": []
  },
  {
    "provider_id": "21308",
    "hospital_name": "NORTON SOUND REGIONAL HOSPITAL",
    "address": "1000 GREG KRUSCHEK AVENUE (P O BOX 966)",
    "city": "NOME",
    "state": "AK",
    "zip_code": "99762",
    "county_name": "NOME",
    "phone_number": "9074433311",
    "hospital_type": "Critical Access Hospitals",
    "hospital_ownership": "Tribal",
    "emergency_services": true,
    "meets_criteria_for_meaningful_use_of_ehrs": true,
    "hospital_overall_rating": 5,
    "hospitals_rdmsn": []
  }
]

export const PHYSICIANTYPE = ['first_nm', 'mid_nm', 'lst_nm'];
export const SPECIALTYTYPE = 'pri_spec';
@Injectable()
export class CommonUtils {

  constructor(private router: Router) {}

  /**
   * method for concatinating the firstName,secondName and lastName
   * @param {{firstName: string; middleName: string; lastName: string}} obj
   * @returns {string}
   */
  static getFullName(obj: {frst_nm: string, mid_nm: string, lst_nm: string}): string {
    return (obj.mid_nm ?
      (`${obj.frst_nm}, ${obj.mid_nm}, ${obj.lst_nm}`) : (`${obj.frst_nm}, ${obj.lst_nm}`));
  }

  /**
   * Preparing the Hospitals List by results
   * @param hospitals
   * @returns {Array}
   */
  static  prepareHospitalsData(hospitals){
    let comparedProviders=[];
    hospitals.forEach((hospital)=>{
      let eachHospitalRecord = {};
      eachHospitalRecord['provider_id']=hospital.provider_id;
      eachHospitalRecord['name'] = hospital.hospital_name;
      eachHospitalRecord['distance'] = hospital.distance;
      eachHospitalRecord['overAllRating'] = hospital.hospital_overall_rating;
      eachHospitalRecord['patientsTreated'] = '280';
      eachHospitalRecord['hospitalType'] = hospital.hospital_type;
      eachHospitalRecord['phoneNumber'] = hospital.phone_number;
      eachHospitalRecord['address'] = hospital.address+' '+hospital.city+' '+hospital.zip_code;
      eachHospitalRecord['adr_ln_1']= hospital.address;
      eachHospitalRecord['cty']= hospital.city;
      if(hospital.location) {
        eachHospitalRecord['coordinates']= {lat: hospital.location.coordinates[0],
          lng: hospital.location.coordinates[1]}
      }

      comparedProviders.push(eachHospitalRecord);
    })
    console.log(comparedProviders);
    return comparedProviders;
  }

  /**
   * Preparing the Physcians List by results
   * @param physicians
   * @returns {Array}
   */
  static preparePhysiciansData(physicians){
    let physicianRecords = [];
    physicians.forEach((physician)=>{
      let eachPhysicianRecord = {};
      eachPhysicianRecord['name'] = CommonUtils.getFullName(physician);
      eachPhysicianRecord['ind_pac_id']=physician.ind_pac_id;
      eachPhysicianRecord['experience'] = physician.grd_yr?(2018-physician.grd_yr) +' Years':'No Experience';
      eachPhysicianRecord['name'] = CommonUtils.getFullName(physician);
      eachPhysicianRecord['secondarySpeciality']= physician.sec_spec_all;
      eachPhysicianRecord['primarySpeciality'] = physician.pri_spec ? physician.pri_spec : 'No Primary Speciality';
      eachPhysicianRecord['gender']= physician.gndr ? CommonUtils.gender(physician.gndr) : 'No gender';
      eachPhysicianRecord['qualityRating'] = physician.phy_measures ?
          CommonUtils.calculatePhysicianRating(physician.phy_measures) : 'No Quality Rating';
      eachPhysicianRecord['patientsTreated'] = physician.patientsTreated ?
          physician.patientsTreated : 'No Patients Treated';
      eachPhysicianRecord['primaryPhoneNumber'] = physician.phn_numbr ?
        physician.phn_numbr : 'No Phone Number' ;
      eachPhysicianRecord['hospitalAffiliation'] = physician.hospitals && physician.hospitals.length > 0 ?
        physician.hospitals: [];
      eachPhysicianRecord['groupAffiliation'] = physician.group_affiliation ? physician.group_affiliation : [];
      if(physician.location) {
        eachPhysicianRecord['coordinates']= {lat: physician.location.coordinates[0],
          lng: physician.location.coordinates[1]}
      }
      eachPhysicianRecord['distance'] = physician.distance ? (physician.distance /1609.344).toFixed(2): 0;
      eachPhysicianRecord['cty']= physician.cty;
      eachPhysicianRecord['primaryPhoneNumber'] = physician.phn_numbr ?
          this.addHypenToLandLineNumber(physician.phn_numbr): 'No Phone Number';
      eachPhysicianRecord['address'] = physician.adr_ln_2?
        _.capitalize(physician.adr_ln_1)+'-'+_.capitalize(physician.adr_ln_2)+'-'+_.capitalize(physician.cty)+', '+ _.upperCase(physician.state) +' '+this.trimZipCode(physician.zip)
        :_.capitalize(physician.adr_ln_1)+'-'+_.capitalize(physician.cty)+', '+ _.upperCase(physician.state)+' '+ this.trimZipCode(physician.zip);
      eachPhysicianRecord['adr_ln_1']= physician.adr_ln_1;
      eachPhysicianRecord['adr_ln_2']= physician.adr_ln_2;
      eachPhysicianRecord['city']= physician.cty;
      eachPhysicianRecord['zip']=this.trimZipCode(physician.zip);
      eachPhysicianRecord['state']=physician.state;
      eachPhysicianRecord['languageKnown']=physician.lang_known;
      eachPhysicianRecord['conditions'] = physician.conditions? physician.conditions.split(",") : [];
      eachPhysicianRecord['procedures'] = physician.procedures? physician.procedures.split(",") : [];
      eachPhysicianRecord['qualifications']=physician.grd_frm;
      eachPhysicianRecord['cost']= physician.avg_cost;
      eachPhysicianRecord['overAllRating'] = physician.overall_rating;
      eachPhysicianRecord['staffRating']= parseInt(physician.overall_rating) > 3 ? parseInt(physician.overall_rating)-1: 2;
      eachPhysicianRecord['patientsTreated']=physician.patients_treated;
      eachPhysicianRecord['insurances'] = physician.insurances;
      eachPhysicianRecord['patientRec'] = "--";
      eachPhysicianRecord['apptPercent'] = "--";
      eachPhysicianRecord['specialities'] = [physician.pri_spec, physician.sec_spec_all];

      physicianRecords.push(eachPhysicianRecord);
    });
    return physicianRecords;
  }

  static prepareGeneralInfoObject(results){
    let generalInfoResults=[];
    results.forEach((value)=>{
      let info={};
      info['ind_pac_id']=value.ind_pac_id;
      if(value.phn_numbr){
        info['primaryPhoneNumber'] = this.addHypenToLandLineNumber(value.phn_numbr);
      } else{
        info['primaryPhoneNumber'] = 'No Phone Number';
      } if(value.distance){
        info['distance'] = (value.distance /1609.344).toFixed(2);
      }
      info['address'] = value.adr_ln_2?(value.adr_ln_1+'-'+value.adr_ln_2+'-'+value.cty+' '
        +this.trimZipCode(value.zip)):value.adr_ln_1+'-'+value.cty+' '+this.trimZipCode(value.zip);
      info['adr_ln_1']= value.adr_ln_1;
      info['cty']= value.cty;
      info['ind_pac_id']=value.ind_pac_id;
      generalInfoResults.push(info)
    })
    return generalInfoResults;
  }

  /**
   * Calculate the Staff Rating
   * @param value
   * @returns {number}
   */
  static calculateStaffRating(value){
    let rate:number=0;
    let sum:number=0;
    value.forEach((rate)=>{
      sum +=(rate.measure_performance_rate/100);
    })
    rate=(sum/value.length);
    let val=rate*5;
    return val;
  }

  /**
   * Calculate the OverAll Rating
   * @param value
   * @returns {number}
   */
  static calculateOverAllRating(value){
    let sum = value/100;
    let val=sum*5;
    return val;
  }

  /**
   * Calculate the Physican Rating
   * @param value
   * @returns {any}
   */
  static calculatePhysicianRating(value){
    let rating = _.meanBy(value, 'measure_performance_rate')
    if(rating){
      return rating;
    } else {
      return null;
    }
  }
  static gender(value){
    if(value == 'M'){
      return 'Male';
    } else if(value == 'F'){
      return 'Female';
    }
  }

  static trimZipCode(zip){
    return zip.substring(0,5);
  }

  /**
   * Add Hypen to phone number Number for Edit page
   * @param value
   * @returns {any}
   *
   */
  static addHypenToLandLineNumber(value){
    if(value){
      return value.match(/\d{3}(?=\d{2,3})|\d+/g).join("-");
    };
  };

  static commaSeparatedString(string){
    if(string){
      return string.split(',')
    }
  }

  /**
   * Filters the location results for zip code
   * @param results
   * @returns {any}
   */
  filterZipCodes = (results): any => {
    return _.flatMap(results, item =>
      _(item.address_components)
        .filter({types: ['postal_code']})
        .map(value => {
            return value.long_name;
          }
        ).value());
  };

  public history = [];



  public loadRouting(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => {
        this.history = [...this.history, urlAfterRedirects];
      });
  }

  public getPreviousUrl(): string {
    return this.history[this.history.length - 2] || '/index';
  }

  public getCapitalizeString(sentence){
    if (sentence) {
      const _value = sentence.toLowerCase();
      return _value.replace(/\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1);
      }).replace(/\s/g, ' ');
    }
  }


  /**
   *
   * @param array
   * @param key
   * @param value
   * @returns {any}
   */
  public findObject = (array: any, key, value ) => {
    let criteria = {};
    criteria[key] = value;
    let obj = _.find(array, criteria);
    if(obj) {
      return obj;
    }
    return '';
  }



}
