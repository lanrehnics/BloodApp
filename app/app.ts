import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {Splashscreen} from 'ionic-native';
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire, firebaseAuthConfig, AuthProviders, AuthMethods} from 'angularfire2';
import {AuthProvider} from './providers/auth/auth';
declare const codePush: CodePushCordovaPlugin;
@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [
       FIREBASE_PROVIDERS,
       defaultFirebase({
         apiKey: "AIzaSyCVW2NYvsoQVVcodOoKsYH2_j_UDuRmq4o",
         authDomain: "ionicbloodappfire.firebaseapp.com",
         databaseURL: "https://ionicbloodappfire.firebaseio.com",
         storageBucket: "ionicbloodappfire.appspot.com"
       }),
       firebaseAuthConfig({
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
            remember: 'default',
            scope: ['email']
        })
   ],
})
export class MyApp {

  private rootPage:any;

  constructor(private platform:Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      StatusBar.backgroundColorByHexString('#d32f2f');
      Splashscreen.hide();
      codePush.sync();
    });
  }
}

ionicBootstrap(MyApp, [AuthProvider]);
