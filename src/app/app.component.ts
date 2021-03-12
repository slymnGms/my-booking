import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  priceListData: any;
  basketItemsData:any=[];
  title = 'my-booking';

  _priceList(data: any) {
    this.priceListData=data;
  }
  _basketItem(data: any) {
    this.basketItemsData.push(data);
  }
}
