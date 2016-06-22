import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/quiz/quiz.html'
})
export class QuizPage {
  id;
  questions;
  title;
  question;
  constructor(private navController: NavController, private params: NavParams) {
    
    this.id = params.get("id");
    this.questions = [
      {
        title : 'Question 1',
        question : 'Are you under 16 years old?',
        moreinfo : ''
      },
      {
        title : 'Question 2',
        question : 'Are you over 70 years old?',
        moreinfo : ''
      },
      {
        title : 'Question 3',
        question : 'Have you had a tattoo in the last 6 months?',
        moreinfo : ''
      },
      {
        title : 'Question 4',
        question : 'Are you Pregnant or have just given birth?',
        moreinfo : ''
      },
      {
        title : 'Question 5',
        question : 'Do you have a serious heart condition?',
        moreinfo : ''
      },
      {
        title : 'Question 6',
        question : 'Are you low in iron?',
        moreinfo : ''
      },
      {
        title : 'Question 7',
        question : 'Did you live in the UK for a total of 6 months or more between 1 January 1980 and 31 December 1996',
        moreinfo : ''
      },
      {
        title : 'Question 8',
        question : 'Have you engaged in \'at risk\' sexual activity in the past 12 months?',
        moreinfo : ''
      },
      {
        title : 'Question 9',
        question : 'Have you ever injected recreational drugs?',
        moreinfo : ''
      },
      {
        title : 'Question 10',
        question : 'Have you gone overseas in the 4 months before your donation?',
        moreinfo : ''
      },
    ];
  }
  nextQuestion() {
    this.navController.push(QuizPage, {
            id : this.id + 1
        });
  }
}
