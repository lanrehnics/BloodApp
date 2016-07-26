import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';
import {AngularFire, firebaseAuthConfig, AuthProviders, AuthMethods, FirebaseAuth} from 'angularfire2';
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  error: any;
  constructor(private nav: NavController, public auth: FirebaseAuth, public viewCtrl: ViewController) {

  }
  dismiss() {
        this.viewCtrl.dismiss();
    }
  login(credentials) {
       this.auth.login(credentials).then((value) => {
           console.log(value)
           this.dismiss()
       }).catch((error) => {
           console.log(error)
           this.error = error
       });
   }
   signup(credentials) {
        this.auth.createUser(credentials).then((value) => {
            console.log(value)
            this.dismiss()
        }).catch((error) => {
            console.log(error)
            this.error = error
        });
    }
}
