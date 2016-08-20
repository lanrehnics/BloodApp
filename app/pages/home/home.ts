import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {QuizPage} from '../quiz/quiz';
import {LoginPage} from '../login/login';
import {SettingsPage} from '../settings/settings';
import {AngularFire, FirebaseListObservable, FirebaseAuth, AngularFireAuth, AuthProviders} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: 'build/pages/home/home.html',

})
export class HomePage {
  items: FirebaseListObservable<any[]>;
  constructor(private navController: NavController, private params: NavParams, public af: AngularFire) {
    this.navController = navController;
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.items = this.af.database.list('/users/' + user.uid);
      }
      else {
        this.items = null;
      }
    });
  }
  loginPush(){
    this.navController.push(LoginPage);
  }
  settingsPush(){
    this.navController.push(SettingsPage);
  }
  quizPush() {
    this.navController.push(QuizPage, {
            id : 0
          }
    );
  }
}
