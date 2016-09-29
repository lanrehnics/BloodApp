import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'quiz-result.html',
})
export class QuizResultPage {
  responses: any;
  id: number;
  items: any;
  constructor(private nav: NavController, private params: NavParams) {
    this.id = params.get("id");

    this.responses = [
      {
        title : 'Sorry, You Are Ineligible To Donate.',
        response : 'Thanks for your interest, but you can\'t donate until you\'re 16.',
        moreinfo : 'http://www.donateblood.com.au/faq/age'
      },
      {
        title : 'Sorry, You Are Ineligible To Donate.',
        response : 'Thanks for your interest, but unfortunately you can\'t give blood.',
        moreinfo : 'http://www.donateblood.com.au/faq/age'
      },
      {
        title : 'Sorry, You Are Ineligible To Donate.',
        response : 'You can only donate blood 4 months after getting a tattoo.',
        moreinfo : 'http://www.donateblood.com.au/faq/tattoo'
      },
      {
        title : 'Sorry, You Are Ineligible To Donate.',
        response : 'You can donate again 9 months after the birth.',
        moreinfo : 'http://www.donateblood.com.au/faq/pregnancy'
      },
      {
        title : 'Sorry, You Are Ineligible To Donate.',
        response : 'Thanks for your interest, but unfortunately you can\'t give blood.',
        moreinfo : 'http://www.donateblood.com.au/faq/angina'
      },
      {
        title : 'Sorry, You Are Ineligible To Donate.',
        response : 'Add iron-rich foods to your diet, check iron levels with your GP and then you may be able to donate.',
        moreinfo : 'http://www.donateblood.com.au/faq/low-iron'
      },
      {
        title : 'Sorry, You Are Ineligible To Donate.',
        response : 'Thanks for your interest, but unfortunately you can\'t give blood.',
        moreinfo : 'http://www.donateblood.com.au/faq/vcjd'
      },
      {
        title : 'Sorry, You Are Ineligible To Donate.',
        response : 'Thanks for your interest, but unfortunately you can\'t give blood for the next 12 months.',
        moreinfo : 'http://www.donateblood.com.au/faq/sexual-activity'
      },
      {
        title : 'Sorry, You Are Ineligible To Donate.',
        response : 'Thanks for your interest, but unfortunately you can\'t give blood.',
        moreinfo : 'http://www.donateblood.com.au/faq/drug-use'
      },
      {
        title : 'You May Be Eligible To Donate.',
        response : 'Depending on your destination, you may be able to donate. Get more info below for the details',
        moreinfo : 'http://www.donateblood.com.au/faq/travel'
      },
      {
        title : 'Congratulations!! You\'re eligible to donate.',
        response : 'Make sure you are eligible by looking at the other eligibility criteria.',
        moreinfo : 'http://www.donateblood.com.au/faq-list'
      },
      {
        title : 'Congratulations!! You\'re eligible to donate.',
        response : 'Make sure you are eligible by looking at the other eligibility criteria.',
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
