import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuizPage} from '../quiz/quiz';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  pushPage;

  constructor(private navController: NavController) {
    this.pushPage = QuizPage;
  }

}
