import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  @Output() public basketItem = new EventEmitter<any>();
  _priceList:any;
  data:any={};
  constructor() { }

  ngOnInit(): void {
  }

  @Input() set priceList(data: any){
    this._priceList=data;
  }

  sendItem(data:any){
    this.basketItem.emit(data);
  }
}
