import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {QuizPage} from '../quiz/quiz';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  constructor(private navController: NavController, private params: NavParams) {
    this.navController = navController;
  }
  quizPush() {
    this.navController.push(QuizPage, {
            id : 0
        });
  }
}
