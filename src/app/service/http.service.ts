import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private httpClient: HttpClient) { }

  getEmployeeData(): Observable<any>{
    return this.httpClient.get("http://localhost:8081/employeepayrollservice/get");
  }
}
