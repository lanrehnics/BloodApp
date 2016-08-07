import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';
import {AngularFire, firebaseAuthConfig, AuthProviders, AuthMethods, FirebaseAuth} from 'angularfire2';
import { Facebook } from 'ionic-native';
declare var firebase:any;
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  error: any;
  loggedIn: boolean;
  facebookLoggedIn: boolean;
  loginForm: any = {
    email: "",
    password: ""
  };
  constructor(private nav: NavController, public auth: FirebaseAuth, public viewCtrl: ViewController) {
    this.loggedIn = false;
    this.facebookLoggedIn = false;
    this.checkLoginStatus();
  }
  dismiss() {
        this.viewCtrl.dismiss();
  }
  login() {
    this.auth.login(this.loginForm).then((value) => {
      this.dismiss();
    }).catch((error) => {
      console.log(error);
    });
  }
  signup() {
    this.auth.createUser(this.loginForm).then((value) => {
      this.dismiss();
    }).catch((error) => {
      this.error = error;
    });
  }
  facebookLoginNative(b){
    Facebook.login(["public_profile", "email"]).then((res) => {
      if (b){
        this.facebookFireAuthenticate();
      }
      else {
        this.facebookFireLink();
      }
    });
    }

  facebookFireAuthenticate(){
    Facebook.getLoginStatus().then((res) => {
      if (res.authResponse) {
        // User is signed-in Facebook.
        var unsubscribe = firebase.auth().onAuthStateChanged( (firebaseUser) => {
          unsubscribe();
          // Check if we are already signed-in Firebase with the correct user.
          if (!this.isUserEqual(res.authResponse, firebaseUser)) {
            // Build Firebase credential with the Facebook auth token.
            var credential = firebase.auth.FacebookAuthProvider.credential(
              res.authResponse.accessToken);
              // Sign in with the credential from the Facebook user.
              firebase.auth().signInWithCredential(credential).then((success) => {
                this.dismiss();
              }).catch((error) => {
                });
              } else {
                this.dismiss();
              }
            });
          } else {
            // User is signed-out of Facebook.
            firebase.auth().signOut();
          }
        });
  }
  isUserEqual(facebookAuthResponse, firebaseUser) {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.FacebookAuthProvider.PROVIDER_ID &&
          providerData[i].uid === facebookAuthResponse.userID) {
            return true;
          }
        }
      }
      return false;
  }
  logout(){
    Facebook.getLoginStatus().then((res) => {
      if (res.authResponse) {
        firebase.auth().signOut();
        Facebook.logout();
        this.dismiss();
      }
      else {
        firebase.auth().signOut();
        this.dismiss();
      }
    });
  }
  checkLoginStatus(){
    if (firebase.auth().currentUser){
      this.loggedIn = true;
      Facebook.getLoginStatus().then((res) => {
        if (res.authResponse) {
          this.facebookLoggedIn = true;
        }
      });
    }
  }
  facebookFireLink(){
    Facebook.getLoginStatus().then((res) => {
      if (res.authResponse) {
        // User is signed-in Facebook.
        var unsubscribe = firebase.auth().onAuthStateChanged( (firebaseUser) => {
          unsubscribe();
          // Check if we are already signed-in Firebase with the correct user.
          if (!this.isUserEqual(res.authResponse, firebaseUser)) {
            // Build Firebase credential with the Facebook auth token.
            var credential = firebase.auth.FacebookAuthProvider.credential(
              res.authResponse.accessToken);
              // Sign in with the credential from the Facebook user.
              firebase.auth().currentUser.link(credential).then((success) => {
                this.dismiss();
              }).catch((error) => {
                });
              } else {
                this.dismiss();
              }
            });
          } else {
            // User is signed-out of Facebook.
            firebase.auth().signOut();
          }
        });
  }
}
