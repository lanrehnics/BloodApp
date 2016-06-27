import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as moment from 'moment';
@Component({
  templateUrl: 'build/pages/date/date.html'
})
export class DatePage {
  inputDate;
  radioType;
  nextDate;
  constructor(private navController: NavController) {
  }
  getNextDate(){
    if (this.radioType == "whole") {
      this.nextDate = moment(this.inputDate, "YYYY-MM-DD").add(12, 'w').format("dddd, D MMMM YYYY");
    }
    else if (this.radioType == "other") {
      this.nextDate = moment(this.inputDate, "YYYY-MM-DD").add(2, 'w').format("dddd, D MMMM YYYY");
    }
  }
}
