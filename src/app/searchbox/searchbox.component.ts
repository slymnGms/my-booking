import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  minLos = new BehaviorSubject(1);
  minDayFilter = new BehaviorSubject(moment().format('YYYY-MM-DD'));
  adultCount = 6;
  childCount = 6;
  constructor() {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }


  mockArrayCreator(limit:any) {
    return Array(limit);
  }

  ngOnInit(): void {
  }


  myFilter = (d: Date): boolean => {
    return moment(d).startOf('day').diff(moment(this.minDayFilter.getValue()).startOf('day')) > -1;
    // tslint:disable-next-line:semicolon
  };
  


}
