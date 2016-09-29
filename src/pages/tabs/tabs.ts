import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {HomePage} from '../home/home';
import {DatePage} from '../date/date';
import {NativeMapPage} from '../native-map/native-map';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;
  constructor(private platform: Platform) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = NativeMapPage;
    this.tab3Root = DatePage;
  }
}
