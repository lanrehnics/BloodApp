import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/map/map.html'
})
export class MapPage {
  map;
  userLatLng;
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
      },
      (error) => {
          console.log(error);
      }
  );
}
addMarker(){

  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });

  let content = "<h4>Information!</h4>";

  this.addInfoWindow(marker, content);

}
addInfoWindow(marker, content){

  let infoWindow = new google.maps.InfoWindow({
    content: content
  });

  google.maps.event.addListener(marker, 'click', function(){
    infoWindow.open(this.map, marker);
  });

}

}
