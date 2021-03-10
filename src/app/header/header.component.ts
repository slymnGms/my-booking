import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  langs = [
    {value: 'Turkish', viewValue: 'TR'},
    {value: 'English', viewValue: 'EN'},
    {value: 'Russian', viewValue: 'RU'}
  ];

  currencys = [
    {value: 'TL', viewValue: 'TL'},
    {value: 'USD', viewValue: 'USD'},
    {value: 'EUR', viewValue: 'EUR'},
    {value: 'GBP', viewValue: 'GBP'}

  ];



  constructor() { }

  ngOnInit(): void {
  }

}
