import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { icon, divIcon, latLng, Layer, marker, tileLayer } from 'leaflet';
import { LeafletDirective } from '@asymmetrik/ngx-leaflet/dist';
import { MapsAPILoader, GoogleMapsAPIWrapper  } from '@agm/core';
import { OpenStreetMapProvider, GoogleProvider, EsriProvider } from 'leaflet-geosearch';
import * as _ from "lodash";

import { DataService } from "../DataService";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {

  public addresses: any;
  public location: any;
  public options: any = null;
  public markers: Layer[] = [];
  public mapProvider: any = new EsriProvider();
  private map: any;
  private mapCenter: any;
  private mapZoom: any;
  @Input() page: any;
   public isExpand: boolean=true;
  @Output() mapClick = new EventEmitter<boolean>();

  @Input() set markerAddresses(addresses: any[]) {
    this.markers = [];
    this.addresses = addresses;
    this.populateAddresses();
  }
  constructor( private dataService: DataService ) {}

  ngOnInit() {
    //Initial options to build the map
    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: 'Open Street Map', zoomControl:false})
      ],
      center: latLng(39.8333333,-98.585522),
      zoom: 10
    };
    this.updateCenter();
  }

  /**
   * To add marker to the of each providers address
   */
  populateAddresses = () => {
    this.addresses.filter(this.addMarker);
    this.updateCenter();
  };

  addMarker = (address, index, array) => {
    this.addMarkerToMap(address.address, address.label? address.label : address.address,
      address.serialNo, address.coordinates, address.fullName);
  };

  /**
   *
   * @param address
   * @param popUpLabel
   * @param markerNumber (To add numbers on the marker-image)
   * @param coordinates
   */
  public addMarkerToMap = (address : string, popUpLabel?: any, markerNumber ?:any, coordinates?: any, providerName?: string ): void => {
    let popupMsg = providerName? providerName+ '<br/> ': '';
    if(coordinates) {
      popupMsg += popUpLabel? popUpLabel : '';
      let iconImg = this.getMarkerIconImage(popupMsg);
      let mapMarker = marker(
        [coordinates.lng, coordinates.lat],
        {
          icon: icon({
            //className: 'leaflet-pane leaflet-marker-pane',
            iconSize: [ 25, 41 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: `assets/images/${iconImg}`,
            shadowUrl: 'assets/images/marker-shadow.png'
            //html:'<img src="assets/images/marker_hole.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"/>' +
            //'<i class="fa-stack-1x calendar-text">'+ (markerNumber ? markerNumber: '') +'</i>'
          })
        }
      ).bindPopup(popupMsg);
      //if(popUpLabel && popUpLabel == 'User Location') {
      //  this.options.center =  latLng(coordinates.lng, coordinates.lat);
      //}
      this.markers.push(mapMarker);
    }else{
      this.dataService.getLatLongByAddress(address).then((result) => {
        popupMsg += popUpLabel ? popUpLabel : result[0].label;
        let iconImg = this.getMarkerIconImage(popupMsg);
        if(result.length > 0) {
          let mapMarker = marker(
            [result[0].y, result[0].x],
            {
              icon: icon({
                //className: 'leaflet-pane leaflet-marker-pane',
                iconSize: [ 25, 41 ],
                iconAnchor: [ 13, 41 ],
                iconUrl: `assets/images/${iconImg}`,
                shadowUrl: 'assets/images/marker-shadow.png'
                /*html:'<img src="assets/images/marker_hole.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"/>' +
                '<i class="fa-stack-1x calendar-text">'+ (markerNumber ? markerNumber: '') +'</i>'*/
              })
            }
          ).bindPopup(popupMsg);
          //this.options.center =  latLng(result[0].y, result[0].x);
          this.markers.push(mapMarker);
        }
      });
    }
  };

  getMarkerIconImage = (location: string): string => {
    return (location === 'Your Location') ? 'marker-icon-yellow.png': 'marker-icon.png';
  };

  /**
   * To add current location or user's location
   */
  private searchLocationMarker = (): void => {
    // this.addMarkerToMap(this.location, "Your Search Location");
  }

  /**
   * To acces the map instance
   * @param map
   */
  onMapReady(map: L.Map) {
    this.map = map;
  }

  public updateCenter = () => {
    let userLocation = _.filter(this.addresses, function(o) {
      return o.label && o.label == 'Your Location';
    });
    if(userLocation.length > 0) {
      this.mapCenter = latLng(userLocation[0].coordinates.lng + 30, userLocation[0].coordinates.lat+30);
    }
    this.mapZoom = 12;
  };

  expandMap(): void {
    this.isExpand = !this.isExpand;
    this.mapClick.emit(this.isExpand);
  }
}
