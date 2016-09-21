import {Component} from '@angular/core';
import {Platform, Storage, LocalStorage} from 'ionic-angular';
import {HomePage} from '../home/home';
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
    this.tab1Root = HomePage;
    this.tab2Root = NativeMapPage;
    this.tab3Root = DatePage;
  }
}
