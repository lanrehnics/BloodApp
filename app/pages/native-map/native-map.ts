import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {GoogleMap, GoogleMapsEvent, GoogleMapsMarker, GoogleMapsMarkerOptions, GoogleMapsLatLng, Geolocation} from 'ionic-native';
declare var google: any;
@Component({
  templateUrl: 'build/pages/native-map/native-map.html',
})
export class NativeMapPage {
  map: GoogleMap;
  service: any;
  userLatLng: any;
  constructor(private navCtrl: NavController, private platform: Platform) {
    platform.ready().then(() => {
      navigator.geolocation.getCurrentPosition(
          (position) => {
              this.userLatLng = new GoogleMapsLatLng(position.coords.latitude, position.coords.longitude);
              this.loadMap();
              this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
                this.searchPlaces();
              });
          },
          (error) => {
            console.log(error);
          }
      );
        });
  }
  loadMap(){
    let location = new GoogleMapsLatLng(-34.9290,138.6010);
    this.map = new GoogleMap('map-native-canvas', {
      'backgroundColor': 'white',
      'controls': {
        'compass': true,
        'myLocationButton': true,
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'camera': {
        'latLng': this.userLatLng,
        'zoom' : 11
      }
    });
  }
  searchPlaces(){
    this.service = new google.maps.places.PlacesService(document.getElementById('attributions'));
    this.service.textSearch({
          location: this.userLatLng,
          radius: 30000 ,
          query: "Australian Red Cross Blood Service"
        }, (results) => {
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            this.map.addMarker({
              position : new GoogleMapsLatLng(place.geometry.location.lat(), place.geometry.location.lng()),
              title : place.name,
              snippet : place.formatted_address
            });
          };
        } );
}
}
