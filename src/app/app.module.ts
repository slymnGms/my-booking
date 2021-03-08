import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ExtrasComponent } from './extras/extras.component';
import { ContactComponent } from './contact/contact.component';
import { GuestsComponent } from './guests/guests.component';
import { PaymentComponent } from './payment/payment.component';
import { BasketComponent } from './basket/basket.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HotelinfoComponent } from './hotelinfo/hotelinfo.component';
import { HotelphotoComponent } from './hotelphoto/hotelphoto.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    RoomsComponent,
    ExtrasComponent,
    ContactComponent,
    GuestsComponent,
    PaymentComponent,
    BasketComponent,
    HeaderComponent,
    FooterComponent,
    HotelinfoComponent,
    HotelphotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
