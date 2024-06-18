import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  private createRequestOptions(): { headers: HttpHeaders } {
   
    const token = 'Bearer ' + sessionStorage.getItem('token');
    // Define the headers
    const headers = new HttpHeaders({
      'Authorization': token
    });

    // Define the request options
    const requestOptions = {
      headers: headers
    };

    return requestOptions;
  }

  baseUrl = "http://localhost:9001/registration/authorization"
  username = sessionStorage.getItem('username');
  ticketNo = sessionStorage.getItem('ticketNo');

  bookTicket(data: any):Observable<any>{
    const requestOptions = this.createRequestOptions();
    return this.http.post(`${this.baseUrl}/booking/${this.username}`, data, requestOptions);
  }


  getAllBookings():Observable<any[]>{
    const requestOptions = this.createRequestOptions();
    return this.http.get<any[]>(`${this.baseUrl}/ViewAllBookings`,requestOptions);
  }

  viewByUserName(): Observable<any> {
    const requestOptions = this.createRequestOptions();
    return this.http.get<any>(`${this.baseUrl}/viewByUserName/${this.username}`, requestOptions)
  }

  getDetails(ticketNo: string): Observable<any> {
    const requestOptions = this.createRequestOptions();
    return this.http.get<any>(`${this.baseUrl}/ViewBookingTicketByItsBusAndTotalCost/${ticketNo}`, requestOptions)
  }

  cancelTicket(ticketNo: any): Observable<any> {
    const requestOptions = this.createRequestOptions();
    return this.http.delete<any>(`${this.baseUrl}/deleteTicket/${ticketNo}`, requestOptions)
  }
}
