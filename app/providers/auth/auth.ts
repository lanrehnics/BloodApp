import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Facebook} from 'ionic-native';
declare var firebase: any;
@Injectable()
export class AuthProvider {
    public constructor() {

    }
    facebookLoginNative(b) {
        Facebook.login(["public_profile", "email"]).then((res) => {
            if (b) {
                this.facebookFireAuthenticate();
            }
            else {
                this.facebookFireLink();
            }
        });
    }
    facebookFireAuthenticate() {
        return new Promise((resolve, reject) => {
            Facebook.login(["public_profile", "email"]).then((re) => {
                Facebook.getLoginStatus().then((res) => {
                    if (res.authResponse) {
                        var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
                            unsubscribe();
                            if (!this.isUserEqual(res.authResponse, firebaseUser)) {
                                var credential = firebase.auth.FacebookAuthProvider.credential(
                                    res.authResponse.accessToken);
                                firebase.auth().signInWithCredential(credential).then((success) => {
                                    resolve(success);
                                }).catch((error) => {
                                    reject(error);
                                });
                            } else {
                                resolve(firebaseUser);
                            }
                        });
                    } else {
                        firebase.auth().signOut();
                        reject(false);
                    }
                });
            });
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
    logout() {
        return new Promise((resolve, reject) => {
            Facebook.getLoginStatus().then((res) => {
                if (res.authResponse) {
                    firebase.auth().signOut();
                    Facebook.logout();
                    resolve("Logged out of Firebase and Facebook");
                }
                else {
                    firebase.auth().signOut();
                    resolve("Logged out of Firebase");
                }
            });
        });
    }

    facebookFireLink() {
        return new Promise((resolve, reject) => {
            Facebook.login(["public_profile", "email"]).then((re) => {
                Facebook.getLoginStatus().then((res) => {
                    if (res.authResponse) {
                        var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
                            unsubscribe();
                            if (!this.isUserEqual(res.authResponse, firebaseUser)) {
                                var credential = firebase.auth.FacebookAuthProvider.credential(
                                    res.authResponse.accessToken);
                                firebase.auth().currentUser.link(credential).then((success) => {
                                    resolve(success);
                                }).catch((error) => {
                                    reject(error);
                                });
                            } else {
                                resolve(firebaseUser);
                            }
                        });
                    } else {
                        reject("Same user");
                    }
                });
            });
        });
    }

}
