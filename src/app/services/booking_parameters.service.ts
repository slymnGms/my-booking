import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
    providedIn: 'root'
})

export class BookingParamtersService {
    constructor(
        private http: HttpClient
    ) { }
    private API_URL = environment.API_URL;
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    getHotelBookingHotelList(data: any): Observable<any[]> {
        var postData:any={};
        postData.Action="Execute";
        postData.Object="SP_HOTELBOOKING_HOTELLIST";
        postData.Parameters=data;
        return this.http.post<any[]>(this.API_URL + '/SP_HOTELBOOKING_HOTELLIST', postData, this.httpOptions);
    }
}
