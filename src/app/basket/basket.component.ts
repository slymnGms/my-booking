import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  _basketItems:any;
  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() set basketItems(data: any){
    this._basketItems=data;
    console.log(this._basketItems);
  }
}
