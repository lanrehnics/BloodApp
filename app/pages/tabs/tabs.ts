import {Component} from '@angular/core';
import {Platform, Storage, LocalStorage} from 'ionic-angular';
import {HomePage} from '../home/home';
import {MapPage} from '../map/map';
import {DatePage} from '../date/date';
import {NativeMapPage} from '../native-map/native-map';
@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  storage: Storage = new Storage(LocalStorage);
  constructor(private platform: Platform) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.storage.get('mapMode').then((success)=>{
      if (success == "native") {
        this.tab2Root = NativeMapPage;
      }
      else {
        this.tab2Root = MapPage;
      }
    }).catch((error)=> {
      this.tab2Root = MapPage;
    });
    this.tab1Root = HomePage;

    this.tab3Root = DatePage;
  }
}
