import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {

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

  baseUrl = "http://localhost:9001/registration/authorization";
  busNo = sessionStorage.getItem('busNo');
  addBus(data: any): Observable<any> {
    const requestOptions = this.createRequestOptions();
    return this.http.post(`${this.baseUrl}/addbus`, data, requestOptions);
  }

  getAllBuses(): Observable<any[]> {
    const requestOptions = this.createRequestOptions();
    return this.http.get<any[]>(`${this.baseUrl}/viewallbuses`);
  }


  getBusByNo(busNo: string): Observable<any> {
    const requestOptions = this.createRequestOptions();
    return this.http.get<any>(`${this.baseUrl}/viewbusbyno/${busNo}`, requestOptions);
  }

  deleteBus(busNo: string): Observable<string> {
    const requestOptions = this.createRequestOptions();
    return this.http.delete<string>(`${this.baseUrl}/deletebus/${busNo}`, requestOptions);
  }

  updateBus(busNo: string, data: any): Observable<any> {
    const requestOptions = this.createRequestOptions();
    return this.http.put(`${this.baseUrl}/updatebusbyid/${busNo}`, data, requestOptions);

  }
  
  findByLocation(source: string, destination: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/findbetween/${source}/${destination}`);
  }
}
