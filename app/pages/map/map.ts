import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/map/map.html'
})
export class MapPage {
  map: any;
  userLatLng: any;
  service: any;
  constructor(private navController: NavController) {
    this.saveLocation();
  }
  loadMap(){
    this.saveLocation();
    let mapOptions = {
      center: this.userLatLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
  saveLocation(){
    navigator.geolocation.getCurrentPosition(
        (position) => {
            this.userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            this.loadMap();
            this.searchPlaces();
        },
        (error) => {
          console.log(error);
        }
    );
  }
  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', function(){
      infoWindow.open(this.map, marker);
    });
  }
  searchPlaces(){
    this.service = new google.maps.places.PlacesService(this.map);
    this.service.textSearch({
          location: this.userLatLng,
          radius: 3000,
          type: ['point_of_interest'],
          keyword: ['Australian Red Cross Blood Service']
        }, (results) => {
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            var map = this.map;
            var placeLoc = results[i].geometry.location;
            var marker = new google.maps.Marker({
              map: this.map,
              position: results[i].geometry.location
            });
            this.addInfoWindow(marker, place.name)
          };
        } );

}
}
