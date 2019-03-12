import {InterceptorService} from "./common/interceptor.service";

declare var google: any;
import { TranslateService } from "@ngx-translate/core";
import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { icon, latLng, Layer, marker, tileLayer } from 'leaflet';
import { LeafletDirective } from '@asymmetrik/ngx-leaflet/dist';
import { MapsAPILoader, GoogleMapsAPIWrapper  } from '@agm/core';
import { OpenStreetMapProvider, GoogleProvider, EsriProvider } from 'leaflet-geosearch';
import {CommonUtils} from "./common/CommonUtils";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  public isLoading:boolean = false;
  constructor( translate: TranslateService, private interceptorService: InterceptorService, public isChanged: ChangeDetectorRef, private commonUtils: CommonUtils){
    translate.setDefaultLang('en');
    translate.use('en');
    this.interceptorService.loaderStatus.subscribe(value => {
      this.isLoading = value;
      commonUtils.loadRouting();
    });
  }

  ngAfterViewChecked(){
    this.isChanged.detectChanges();
  }
  registerUser(form: NgForm) {
    console.log(form.value);
    // {email: '...', password: '...'}
  }

  ngOnInit() {  }

}
