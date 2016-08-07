import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {QuizPage} from '../quiz/quiz';
import {LoginPage} from '../login/login';
import {AngularFire, FirebaseListObservable, FirebaseAuth, AngularFireAuth, AuthProviders} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: 'build/pages/home/home.html',

})
export class HomePage {
  items: FirebaseListObservable<any[]>;
  authObject: any;
  constructor(private navController: NavController, private params: NavParams, public af: AngularFire) {
    this.navController = navController;
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.getFData();
      }
      else {
        this.items = null;
      }
    });
  }
  loginPush(){
    this.navController.push(LoginPage);
  }
  getFData(){
    this.saveAuthData();
    this.items = this.af.database.list('/users/' + this.authObject.uid);
  }
  quizPush() {
    this.navController.push(QuizPage, {
            id : 0
        });
  }
  saveAuthData(){
    this.authObject = firebase.auth().currentUser;
  }
  setElig(result){
    this.items.update('info', { canDonate : result }
    )
  }
}
