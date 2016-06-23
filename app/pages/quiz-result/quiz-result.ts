import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the QuizResultPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/quiz-result/quiz-result.html',
})
export class QuizResultPage {
  responses;
  id;
  constructor(private nav: NavController, private params: NavParams) {
    this.id = params.get("id");

    this.responses = [
      {
        response : 'Sorry You\'re too young to donate, once you\'re 16 you\'ll be able to donate.',
        moreinfo : 'http://www.donateblood.com.au/faq/age'
      },
      {
        response : 'Sorry you\'re not eligible to donate.',
        moreinfo : 'http://www.donateblood.com.au/faq/age'
      },
      {
        response : 'Sorry you can\'t donate currently but once six months has passed after you got your tatoo you will be able to donate.',
        moreinfo : 'http://www.donateblood.com.au/faq/tattoo'
      },
      {
        response : 'Sorry you can\'t donate currently but nine months after the birth you will be able to.',
        moreinfo : 'http://www.donateblood.com.au/faq/pregnancy'
      },
      {
        response : 'Sorry you\re not eligible to donate.',
        moreinfo : 'http://www.donateblood.com.au/faq/angina'
      },
      {
        response : 'Sorry you\'re not eligible to donate but if you\'re iron levels become normal then you will be able to donate.',
        moreinfo : 'http://www.donateblood.com.au/faq/low-iron'
      },
      {
        response : 'Sorry you\'re not eligible to donate.',
        moreinfo : 'http://www.donateblood.com.au/faq/vcjd'
      },
      {
        response : 'Sorry you\'re not eligible to donate for the next 12 months',
        moreinfo : 'http://www.donateblood.com.au/faq/sexual-activity'
      },
      {
        response : 'Sorry you\'re not eligible to donate.',
        moreinfo : 'http://www.donateblood.com.au/faq/drug-use'
      },
      {
        response : 'You may be able to donate. It depends where you travelled to.',
        moreinfo : 'http://www.donateblood.com.au/faq/travel'
      },
      {
        response : 'Congratulations!! You\'re eligible to donate. (Get more info to make sure you are eligible)',
        moreinfo : 'http://www.donateblood.com.au/faq-list'
      },
      {
        response : 'Congratulations!! You\'re eligible to donate. (Get more info to make sure you are eligible)',
        moreinfo : 'http://www.donateblood.com.au/faq-list'

      }
    ];
  }
  backToRoot(){
    this.nav.popToRoot()
  }
  ionicGoBack() {
    this.nav.popToRoot()
  }
}
