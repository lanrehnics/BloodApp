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
  constructor(private navController: NavController, private params: NavParams, public af: AngularFire) {
    this.navController = navController;

  }
  loginPush(){
    this.navController.push(LoginPage);
  }
  getFData(){
    this.items = this.af.database.list('/'  );
  }
  quizPush() {
    this.navController.push(QuizPage, {
            id : 0
        });
  }
}
