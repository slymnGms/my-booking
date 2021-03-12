import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as moment from 'moment'
import { HotelDetailPriceService } from '../services/hotel_prices.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']

})
export class SearchboxComponent implements OnInit {

  @Output() public priceList = new EventEmitter<any>();
  minDate: Date;
  maxDate: Date;
  minLos = new BehaviorSubject(1);
  minDayFilter = new BehaviorSubject(moment().format('YYYY-MM-DD'));
  adultCount = 6;
  childCount = 6;


  //params Defining
  checkInDate: Date = new Date();
  checkOutDate: Date = new Date(this.checkInDate.getFullYear(), this.checkInDate.getMonth(), this.checkInDate.getDay() + 1);
  adult = 1;
  child = 0;
  promotion = "";

  constructor(
    private _service: HotelDetailPriceService,
  ) {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }


  mockArrayCreator(limit: any) {
    return Array(limit);
  }

  ngOnInit(): void {
  }


  myFilter = (d: Date): boolean => {
    return moment(d).startOf('day').diff(moment(this.minDayFilter.getValue()).startOf('day')) > -1;
    // tslint:disable-next-line:semicolon
  };

  onSubmit(): void {
    var data: any = {};
    data.HOTELID = 22855;
    data.CHECKIN = this.checkInDate;
    data.CHECKOUT = this.checkOutDate;
    data.ADULT = this.adult;
    data.CHILDAGES = this.child;
    data.CURRENCY = "EUR";
    data.LANGUAGE = "tr";
    data.PROMOCODE = this.promotion;
    data.COUNTRYCODE = "";

    var logData = this._service
      .getHotelDetailPrice(data)
      .subscribe({
        next: data => { this.priceList.emit(data[0]) },
        error: error => { console.log(error.error) }
      });
  }
}