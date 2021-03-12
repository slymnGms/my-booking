import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DatePipe } from '@angular/common';
@Injectable({
    providedIn: 'root'
})

export class HotelDetailPriceService {
    constructor(
        private http: HttpClient,
        private datePipe: DatePipe
    ) { }
    private API_URL = environment.API_URL;
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    getHotelDetailPrice(data: any): Observable<any[]> {
        var dataToSend: any = {
            "CHECKIN": this.datePipe.transform(data.CHECKIN, 'yyyy-MM-dd') + ' 00:00',
            "CHECKOUT": this.datePipe.transform(data.CHECKOUT, 'yyyy-MM-dd') + ' 00:00',
            "SESSION": null,
            "IPADDRESS": "",
            "PORTALSELLERID": null,
            "PORTALID": 1,
            "HOTELID": 22855,
            "ADULT": data.ADULT,
            "CHILDAGES": data.CHILDAGES,
            "CURRENCY": "EUR",
            "LANGUAGE": "tr",
            "PROMOCODE": data.PROMOCODE,
            "COUNTRYCODE": ""

        };

        var postData: any = {};
        postData.Action = "Execute";
        postData.Object = "SP_PORTALV4_HOTELDETAILPRICE";
        postData.Parameters = dataToSend;
        return this.http.post<any[]>(this.API_URL + '/SP_PORTALV4_HOTELDETAILPRICE', postData, this.httpOptions);
    }
}
