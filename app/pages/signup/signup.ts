import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';
import {AngularFire, firebaseAuthConfig, AuthProviders, AuthMethods, FirebaseAuth} from 'angularfire2';
@Component({
  templateUrl: 'build/pages/signup/signup.html',
})
export class SignupPage {
  error: any;
  constructor(private nav: NavController, public auth: FirebaseAuth, public viewCtrl: ViewController) {

  }
  dismiss() {
        this.viewCtrl.dismiss();
    }
  signup(credentials) {
       this.auth.createUser(credentials).then((value) => {
           console.log(value)
           this.dismiss()
       }).catch((error) => {
           this.error = error
           console.log(error)
       });
   }
}
