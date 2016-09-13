import {Component} from '@angular/core';
import {Platform, Storage, LocalStorage} from 'ionic-angular';
import {HomePage} from '../home/home';
import {MapPage} from '../map/map';
import {DatePage} from '../date/date';
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
    this.tab2Root = MapPage;
    this.tab1Root = HomePage;
    this.tab3Root = DatePage;
  }
}
