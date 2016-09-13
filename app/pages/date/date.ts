import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as moment from 'moment';
@Component({
  templateUrl: 'build/pages/date/date.html'
})
export class DatePage {
  inputDate: string;
  radioType: string;
  nextDate: string;
  constructor(private navController: NavController) {
  }
  getNextDate(){
    var tempDate;
    tempDate = moment(this.inputDate, "YYYY-MM-DD").add(this.radioType, 'w');
    if (tempDate.isSameOrBefore(moment())) {
      this.nextDate = "Today";
    }
    else {
      this.nextDate = tempDate.format("dddd, D MMMM YYYY");
    }
  }
}
