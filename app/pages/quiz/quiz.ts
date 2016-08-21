import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {QuizResultPage} from '../quiz-result/quiz-result'

@Component({
  templateUrl: 'build/pages/quiz/quiz.html'
})
export class QuizPage {
  id: number;
  questions: any = [
    {
      question : 'Are you under 16 years old?',
      moreinfo : 'http://www.donateblood.com.au/faq/age'
    },
    {
      question : 'Are you over 70 years old?',
      moreinfo : 'http://www.donateblood.com.au/faq/age'
    },
    {
      question : 'Have you had a tattoo in the last 6 months?',
      moreinfo : 'http://www.donateblood.com.au/faq/tattoo'
    },
    {
      question : 'Are you Pregnant or have just given birth?',
      moreinfo : 'http://www.donateblood.com.au/faq/pregnancy'
    },
    {
      question : 'Do you have a serious heart condition?',
      moreinfo : 'http://www.donateblood.com.au/faq/angina'
    },
    {
      question : 'Are you low in iron?',
      moreinfo : 'http://www.donateblood.com.au/faq/low-iron'
    },
    {
      question : 'Did you live in the UK for a total of 6 months or more between 1 January 1980 and 31 December 1996',
      moreinfo : 'http://www.donateblood.com.au/faq/vcjd'
    },
    {
      question : 'Have you engaged in \'at risk\' sexual activity in the past 12 months?',
      moreinfo : 'http://www.donateblood.com.au/faq/sexual-activity'
    },
    {
      question : 'Have you ever injected recreational drugs?',
      moreinfo : 'http://www.donateblood.com.au/faq/drug-use'
    },
    {
      question : 'Have you gone overseas in the 4 months before your donation?',
      moreinfo : 'http://www.donateblood.com.au/faq/travel'
    },
  ];
  constructor(private nav: NavController, private params: NavParams) {
    this.id = params.get("id");
  }
  nextQuestion() {
    if (this.id < 9){
    this.nav.push(QuizPage, {
            id : this.id + 1
        });}
    else {
      this.nav.push(QuizResultPage, {
        id : 11
      })
    }
  }
  goToQuizResultFail() {
    this.nav.push(QuizResultPage, {
      id : this.id
    })
  }
}
