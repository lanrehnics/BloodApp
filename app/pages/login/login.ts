import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';
import {AngularFire, firebaseAuthConfig, AuthProviders, AuthMethods, FirebaseAuth} from 'angularfire2';
import { Facebook } from 'ionic-native';
import { AuthProvider } from '../../providers/auth/auth';
declare var firebase: any;
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
    constructor(private nav: NavController, public auth: FirebaseAuth, public viewCtrl: ViewController, private authprov: AuthProvider) {
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
    facebookLoginNative(b) {
        if (b) {
            this.authprov.facebookFireAuthenticate().then((success) => {
                this.dismiss();
            });
        }
        else {
            this.authprov.facebookFireLink().then((success) => {
                this.dismiss();
            });
        }
    }
    logout() {
        this.authprov.logout().then((success) => {
            this.dismiss();
        });
    }
    checkLoginStatus() {
        if (firebase.auth().currentUser) {
            this.loggedIn = true;
            Facebook.getLoginStatus().then((res) => {
                if (res.authResponse) {
                    this.facebookLoggedIn = true;
                }
            });
        }
    }
}
