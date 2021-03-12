import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http'


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';



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
    AppRoutingModule,
    FlexLayoutModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    HttpClientModule

    , FormsModule
    , ReactiveFormsModule

  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
